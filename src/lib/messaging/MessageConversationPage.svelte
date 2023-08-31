<script lang="ts">
    import { onSnapshot } from "firebase/firestore";
    import { afterUpdate, onDestroy, onMount } from "svelte";
    import { getMessagesDoc, markAllAsRead, sendMessage, throwError } from "../../fb";
    import { client } from "../../client";
    import type { Message, PrivateUserData } from "../../types";
    import MessageWell from "./MessageWell.svelte";
    import url from "../../url";
    import ArrowUpCircle from "svelte-material-icons/ArrowUpCircle.svelte";
    import ArrowLeft from "svelte-material-icons/ArrowLeft.svelte";
    import { v4 as uuid } from "uuid";

    const otherPerson = $url.hash.match(/#messages\/([\w_-]*)/)[1] as string;

    let unsub = () => {};
    let messages: Message[] = [];
    let lastMessage = -1;
    let value = "";
    let hasStarted = false;
    let messageQueue: {
        nonce: string,
        text: string
    }[] = [];

    let name: string | null;
    $: name = $client.ready
        ? ($client.privateData as PrivateUserData).matches[otherPerson].nickname
        : null;

    let well: HTMLDivElement;
    let untracked = {
        scrollToBottom: false,
        distanceFromBottom: 0,
    };

    $: {
        if ($client.ready && !hasStarted) {
            hasStarted = true;
            unsub();
            unsub = onSnapshot(
                getMessagesDoc($client.uid, otherPerson, "conversation"),
                (snap) => {
                    const height = well.getBoundingClientRect().height;
                    const distanceFromBottom =
                        well.scrollHeight - well.scrollTop - height;
                    if (distanceFromBottom < 100) {
                        Reflect.set(untracked, "scrollToBottom", true);
                        Reflect.set(
                            untracked,
                            "distanceFromBottom",
                            distanceFromBottom
                        );
                    }

                    if (!snap.exists()) {
                        return;
                    }

                    const convo = snap.data();
                    const numMsgs = convo.lastMessage - lastMessage;
                    lastMessage = convo.lastMessage;

                    for (let i = numMsgs; i > 0; i--) {
                        const msg = convo.messages.at(-i);
                        messages.push(msg);
                    }

                    messages = messages;

                    if (numMsgs > 0) {
                        markAllAsRead();
                    }


                    messageQueue = messageQueue.filter(({ nonce }) => !messages.some(m => m.nonce === nonce));
                    
                    (window as any).messages = messages;
                    (window as any).messageQueue = messageQueue;
                    console.log({ messages, messageQueue });
                },
                throwError
            );
        }
    }

    afterUpdate(() => {
        if (untracked.scrollToBottom) {
            well.scrollTop = Math.ceil(
                well.scrollHeight -
                    untracked.distanceFromBottom -
                    well.getBoundingClientRect().height
            );
        }
    });

    onDestroy(() => {
        unsub();
    });

    const handleSend = () => {
        if (!value.trim()) {
            return;
        }
        
        const nonce = uuid();
        messageQueue.push({
            text: value,
            nonce
        });
        messageQueue = messageQueue;
        sendMessage({ to: otherPerson, message: value, nonce });
    }
</script>

<div class="container">
    <div class="header">
        <a class="arrowBack" href="/#messages">
            <ArrowLeft color={null} size={"2em"} />
        </a>
        <h1>{name ?? "Loading..."}</h1>
    </div>
    <div class="wellContainer">
        <MessageWell {messages} {messageQueue} bind:containerRef={well} />
    </div>

    <form
        on:submit={(e) => {
            e.preventDefault();
            handleSend();
            value = "";
        }}
    >
        <input
            class="msgInput"
            type="text"
            placeholder={name
                ? `Send message to ${name}...`
                : "Send message..."}
            enterkeyhint="send"
            bind:value
        />
        <div class="sendButtonContainer">
            <button type="submit" class="sendButton">
                <ArrowUpCircle color={null} size={null} />
            </button>
        </div>
    </form>
</div>

<style>
    .arrowBack {
        all: unset;
        cursor: pointer;
        display: flex;
        fill: rgb(115, 115, 255);
    }
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .wrapper {
        display: flex;
        position: absolute;
        inset: 0;
    }
    .container {
        display: flex;
        flex-direction: column;
        height: 100%;
        position: sticky;
        bottom: 10px;
    }
    .wellContainer {
        flex-grow: 1;
        position: relative;
    }
    form {
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .sendButtonContainer {
        position: absolute;
        inset: 5px;
        display: flex;
        justify-content: right;
        pointer-events: none;
    }
    .sendButton {
        all: unset;
        pointer-events: all;
        cursor: pointer;
        fill: var(--accentColor);
        height: 100%;
        aspect-ratio: 1 / 1;
    }
</style>

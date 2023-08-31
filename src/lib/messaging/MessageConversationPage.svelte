<script lang="ts">
    import { onSnapshot } from "firebase/firestore";
    import { afterUpdate, onDestroy, onMount } from "svelte";
    import { getMessagesDoc, markAllAsRead, sendMessage } from "../../fb";
    import { client } from "../../client";
    import type { Message, PrivateUserData } from '../../types';
    import MessageWell from "./MessageWell.svelte";
    import url from '../../url';
    import ArrowUpCircle from 'svelte-material-icons/ArrowUpCircle.svelte';
    import ArrowLeft from 'svelte-material-icons/ArrowLeft.svelte';

    const otherPerson = $url.hash.match(/#messages\/([\w_-]*)/)[1] as string;
    console.log(otherPerson);

    let unsub = () => {};
    let messages: Message[] = [];
    let lastMessage = -1;
    let value = '';
    let hasStarted = false;

    let name: string | null;
    $: name = $client.ready ? ($client.privateData as PrivateUserData).matches[otherPerson].nickname : null;

    let well: HTMLDivElement;
    let untracked = {
        scrollToBottom: false,
        distanceFromBottom: 0,
    };

    $: {
        if ($client.ready && !hasStarted) {
            hasStarted = true;
            unsub();
            unsub = onSnapshot(getMessagesDoc($client.uid, otherPerson, 'conversation'), (snap) => {
                const height = well.getBoundingClientRect().height;
                const distanceFromBottom = well.scrollHeight - well.scrollTop - height;
                if (distanceFromBottom < 100) {
                    Reflect.set(untracked, 'scrollToBottom', true);
                    Reflect.set(untracked, 'distanceFromBottom', distanceFromBottom);
                    console.log(untracked);
                }

                console.log({ height, distanceFromBottom });

                console.log('Ran!');
                if (!snap.exists()) {
                    console.log('Doc does not exist');
                    return;
                }

                const convo = snap.data();
                const numMsgs = convo.lastMessage - lastMessage;
                lastMessage = convo.lastMessage;
                console.log({ convo, lastMessage, numMsgs });

                for (let i = numMsgs; i > 0; i--) {
                    const msg = convo.messages.at(-i);
                    messages.push(msg);
                }

                messages = messages;

                if (numMsgs > 0) {
                    markAllAsRead();
                }
            })
        }
    }

    afterUpdate(() => {
        if (untracked.scrollToBottom) {
            well.scrollTop = Math.ceil(well.scrollHeight - untracked.distanceFromBottom - well.getBoundingClientRect().height);     
        }
    });

    onDestroy(() => {
        unsub();
    });
</script>

    <div class='container'>
        <div class='header'>
            <a class='arrowBack' href='/#messages'>
                <ArrowLeft color={null} size={'2em'}/>
            </a>
            <h1>{name ?? 'Loading...'}</h1>
        </div>
        <div class='wellContainer'>
            <MessageWell messages={messages} bind:containerRef={well} />
        </div>

        <form on:submit={e => {
            e.preventDefault();
            sendMessage({ to: otherPerson, message: value });
            value = '';
        }}>
            <input class='msgInput' type="text" placeholder={name ? `Send message to ${name}...` : 'Send message...'} enterkeyhint='send' bind:value={value} />
            <div class='sendButtonContainer'>
                <button type="submit" class='sendButton'>
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
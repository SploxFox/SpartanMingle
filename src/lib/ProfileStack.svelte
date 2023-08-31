<script lang='ts'>
    import type { DocumentData } from "firebase/firestore";
    import { getClientData, getUserDoc, likeDislike, queryProfileStack } from "../fb";
    import type { Gender, LikeDislikeVerdict, UserData, UserProfile } from "../types";
    import Loading from "./Loading.svelte";
    import ProfileSwipe from "./ProfileSwipe.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    let profiles: { [index: string]: UserData } = {}
    let profileOrder: string[] = [];
    let loading = false;
    let isFirst = true;
    const numLoaded = 5;

    //$: console.log(`Currently showing ${profileOrder[0]}`);

    const genders = getClientData().then(val => 
            Object.entries((val as DocumentData).sexuality)
            .filter(([gender, bool]) => bool)
            .map(([gender]) => gender as Gender));
    
    const getProfiles = async () => {
        loading = true;
        const res = await queryProfileStack({ genders: await genders });
        for (const profile of res) {
            profiles[profile.userId] = profile;
            if (!profileOrder.includes(profile.userId)) {
                profileOrder.push(profile.userId);
            }
        }
        loading = false;
        profiles = profiles;
        profileOrder = profileOrder;
    }

    $: handleSwipe = async ({ detail: { uid, verdict }}: CustomEvent<{ uid: string, verdict: LikeDislikeVerdict }>) => {
        likeDislike({ otherUser: uid , verdict })
                .then(matchVerdict =>
                        dispatch('match-verdict', {
                            matchVerdict: matchVerdict.data,
                            uid,
                            pid: profiles[profileOrder[0]].photos[0]
                        })
                );

        if (isFirst) {
            isFirst = false;
        } else {
            profileOrder.shift();
        }

        profileOrder = profileOrder;

        if (!loading && profileOrder.length < 5) {
            getProfiles();
        }
    }

    getProfiles();
</script>

{#if loading}
    <Loading stack />
{:else if profileOrder.length == 0 || (!isFirst && profileOrder.length == 1)}
    <p>No profiles left — you swiped through them all! Maybe ask your crush to join? <span>( ͡° ͜ʖ ͡°)</span></p>
{/if}

{#each profileOrder.slice(0, numLoaded).reverse() as uid (uid)}
    <ProfileSwipe profile={profiles[uid]} on:swipe={handleSwipe} />
{/each}

<style>
    .container {
        width: 320px;
        position: relative;
    }

    span {
        white-space: nowrap;
    }
</style>
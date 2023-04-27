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
    }

    $: handleSwipe = async ({ detail: { verdict }}: CustomEvent<{ verdict: LikeDislikeVerdict }>) => {
        likeDislike({ otherUser: profileOrder[0], verdict })
                .then(matchVerdict =>
                        dispatch('match-verdict', {
                            matchVerdict: matchVerdict.data,
                            uid: profileOrder[0],
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

<div class="container">
    {#if loading}
        <Loading />
    {:else if profileOrder.length == 0}
        No profiles left
    {/if}

    {#each profileOrder.slice(0, numLoaded).reverse() as uid (uid)}
        <ProfileSwipe profile={profiles[uid]} on:swipe={handleSwipe} />
    {/each}
</div>

<style>
    .container {
        width: 320px;
        position: relative;
    }
</style>
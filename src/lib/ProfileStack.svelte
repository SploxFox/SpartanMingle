<script lang='ts'>
    import type { DocumentData } from "firebase/firestore";
    import { getClientData, getUserDoc, queryProfileStack } from "../fb";
    import type { Gender, LikeDislikeVerdict, UserData, UserProfile } from "../types";
    import Loading from "./Loading.svelte";
    import ProfileSwipe from "./ProfileSwipe.svelte";

    let profiles: { [index: string]: UserData } = {}
    let upcomingProfiles: string[] = [];
    let profileA = '';
    let profileB = '';
    let profileC = '';
    let profileAEl: HTMLElement;
    let profileBEl: HTMLElement;
    let profileCEl: HTMLElement;
    let index = 0;
    $: aOnTop = index % 3 == 2;
    $: bOnTop = index % 3 == 1;
    $: cOnTop = index % 3 == 0;
    $: console.log({ index, aOnTop, bOnTop, cOnTop, profileAEl, profileBEl, profileCEl });
    let loading = false;
    let isFirst = true;

    const nextProfile = (uid: string) => {
        const parent = profileAEl.parentNode;
        if (index % 3 == 0) {
            profileC = uid;
            console.log('Updated C');
            parent.insertBefore(profileCEl, profileAEl);
        } else if (index % 3 == 1) {
            profileB = uid;
            console.log('Updated B');   
            parent.insertBefore(profileBEl, profileCEl);
        } else {
            profileA = uid;
            console.log('Updated A');
            parent.insertBefore(profileAEl, profileBEl);
        }
        index += 1;
    }

    const genders = getClientData().then(val => 
            Object.entries((val as DocumentData).sexuality)
            .filter(([gender, bool]) => bool)
            .map(([gender]) => gender as Gender));
    
    const getProfiles = async () => {
        loading = true;
        const res = await queryProfileStack({ genders: await genders });
        for (const profile of res) {
            profiles[profile.userId] = profile;
            upcomingProfiles.push(profile.userId);
        }
        loading = false;
        profiles = profiles;

        if (!profileA) {
            profileA = upcomingProfiles.shift();
        }

        if (!profileB) {
            profileB = upcomingProfiles.shift();
        }

        if (!profileC) {
            profileC = upcomingProfiles.shift();
        }
    }

    $: handleSwipe = async ({ detail: { verdict }}: CustomEvent<{ verdict: LikeDislikeVerdict }>) => {
        /*if (lastSwiped) {
            delete profiles[lastSwiped];
            profileOrder.shift();
            profileOrder = profileOrder;
        }
        lastSwiped = profileOrder[0];*/

        if (isFirst) {
            isFirst = false;
        } else {
            nextProfile(upcomingProfiles.shift());
        }

        upcomingProfiles = upcomingProfiles;

        if (!loading && upcomingProfiles.length < 5) {
            getProfiles();
        }
    }

    getProfiles();
</script>

<div class="container">
    {#if loading}
        <Loading />
    {/if}
    
    {#key profileA}
        {#if profileA}
            <ProfileSwipe bind:element={profileAEl} debug='A' profile={profiles[profileA]} on:swipe={handleSwipe} />
        {/if}
    {/key}

    {#key profileB}
        {#if profileB}
            <ProfileSwipe bind:element={profileBEl} debug='B' profile={profiles[profileB]} on:swipe={handleSwipe} />
        {/if}
    {/key}

    {#key profileC}
        {#if profileC}
            <ProfileSwipe bind:element={profileCEl} debug='C' profile={profiles[profileC]} on:swipe={handleSwipe} />
        {/if}
    {/key}
</div>

<style>
    .container {
        width: 320px;
        position: relative;
    }
</style>
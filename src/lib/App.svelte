<script>
    import { get } from "svelte/store";
    import { auth } from "../fb";
    import { user } from "../user";
    import AccountButton from "./AccountButton.svelte";
    import BasicPage from "./BasicPage.svelte";
    import GenderSelector from "./GenderSelector.svelte";
    import ProfileForm from "./ProfileForm.svelte";
    import SignIn from "./SignIn.svelte";
    import Terms from "./Terms.svelte";
    import url from "../url";
    import MainPage from "./MainPage.svelte";

</script>

{#if $url.hash == '#terms'}
    <BasicPage>
        <Terms />
    </BasicPage>
{:else if $user.fbUser == 'pending'}
    <BasicPage>
        Loading...
    </BasicPage>
{:else if $url.hash === '#profile' && $user.fbUser}
    <BasicPage>
        <ProfileForm/>
    </BasicPage>
{:else if $user.fbUser}
    <BasicPage noScroll>
        <MainPage/>
    </BasicPage>
{:else}
    <BasicPage>
        <SignIn/>
    </BasicPage>
{/if}
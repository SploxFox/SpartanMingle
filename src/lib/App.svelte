<script>
    import { client } from "../client";
    import BasicPage from "./BasicPage.svelte";
    import ProfileForm from "./ProfileForm.svelte";
    import SignIn from "./SignIn.svelte";
    import Terms from "./Terms.svelte";
    import url from "../url";
    import MainPage from "./MainPage.svelte";
    import Loading from "./Loading.svelte";
    import MessagePage from "./messaging/MessageSelectPage.svelte";
    import MessageConversationPage from "./messaging/MessageConversationPage.svelte";
    import Tutorial from "./Tutorial.svelte";

</script>

{#if $url.hash == '#terms'}
    <BasicPage>
        <Terms />
    </BasicPage>
{:else if $client.signedOut}
    <BasicPage>
        <div style={`width: 100%; height: 100%; display: flex; align-items: center; justify-content: center`}>
            <SignIn/>
        </div>
    </BasicPage>
{:else if $url.hash == '#loading' || !$client.ready}
    <BasicPage>
        <Loading stack/>
    </BasicPage>
{:else if $url.hash === '#tutorial'}
    <BasicPage>
        <Tutorial />
    </BasicPage>
{:else if $client.ready && ($url.hash === '#profile' || !$client.privateData)}
    <BasicPage>
        <ProfileForm/>
    </BasicPage>
{:else if $url.hash === '#messages'}
    <BasicPage>
        <MessagePage />
    </BasicPage>
{:else if $url.hash.startsWith('#messages/')}
    <BasicPage noScroll>
        <MessageConversationPage />
    </BasicPage>
{:else}
    <BasicPage noScroll>
        <MainPage/>
    </BasicPage>
{/if}
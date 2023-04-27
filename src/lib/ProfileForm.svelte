<script lang='ts'>
    import { createSelectedGender } from "../constructors";
    import GenderSelector from "./GenderSelector.svelte";
    import PhotoUpload from "./MultiPhotoUpload.svelte";
    import Button from "./Button.svelte";
    import AlignRight from "./AlignRight.svelte";
    import { defaultName, deleteUser, getClientData, signOut, updateUser } from "../fb";
    import type { PhotoUploadPhoto, UserData } from "../types";
    import Loading from "./Loading.svelte";
    import LoadingCover from "./LoadingCover.svelte";
    import { getProfile } from "../gpai";
    import FlippableProfilePhoto from "./FlippableProfilePhoto.svelte";
    import MatchGet from "./MatchGet.svelte";

    const userData = getClientData();
    userData.then((data: UserData | false) => {
        if (data) {
            selectedGender = {
                male: data.gender === 'male',
                female: data.gender === 'female',
                other: data.gender === 'other'
            }
            selectedSexuality = data.sexuality;
            birthday = new Date(data.birthday).toISOString().split('T')[0];
            aboutMe = data.aboutMe;
            terms = data.terms === 1;
            nickname = data.nickname || defaultName;
            photos = data.photos.reduce((prev, curr) => ({
                ...prev,
                [curr]: {
                    type: 'old'
                }
            }), {});
        }
    })

    let photoOrder: number[] = [];
    let selectedGender = createSelectedGender();
    let selectedSexuality = createSelectedGender();
    let birthday: string;
    let aboutMe: string = '';
    let tagline: string = '';
    let nickname: string = defaultName;

    let terms = false;

    let photos: { [index: string]: PhotoUploadPhoto } = {};

    $: numPhotos = Object.keys(photos).length;

    let uploadPromise;

    const requirements = [
        () => [selectedGender.male || selectedGender.female || selectedGender.other,
                'Missing gender: please select your gender.'],
        () => [selectedSexuality.male || selectedSexuality.female || selectedSexuality.other,
                'Missing attraction: please select the gender(s) you are attracted to.'],
        () => [!!birthday, 'Missing birthday: please enter your birthday.'],
        () => [(Date.now() - new Date(birthday).getTime()) > 18 * 52 * 7 * 24 * 60 * 60 * 1000,
                'Sorry, but you must be at least 18 years of age or older to use this website.'],
        () => [numPhotos >= 2, 'Not enough photos: please upload at least 2 photos.'],
        () => [aboutMe.length < 140, 'Description too long: max 140 characters.'],
        () => [terms, 'Terms and Conditions: You must agree to the terms and conditions in order to use this website.']
    ] satisfies (() => [boolean, string])[];

    let unsatisfiedRequirements: string[] = [];

    const validateData = () => {
        unsatisfiedRequirements = [];

        for (const [sat, msg] of requirements.map(v => v())) {
            if (!sat) {
                unsatisfiedRequirements.push(msg);
            }
        }
    }

    const handleChangeAboutMe = (e: Event & {
            currentTarget: EventTarget & HTMLTextAreaElement;
            }) => {
        const el = e.currentTarget;
        console.log(el.scrollHeight)
        if (el.scrollHeight > 118) {
            el.value = aboutMe;
        } else {
            aboutMe = el.value;
        }
    }

    const handleSubmit = () => {
        validateData();

        if (unsatisfiedRequirements.length > 0) {
            return;
        } else {
            uploadPromise = updateUser({
                nickname,
                tagline,
                gender: selectedGender.male ? "male" : (selectedGender.female ? "female" : "other"),
                sexuality: selectedSexuality,
                birthday: new Date(birthday).getTime(),
                aboutMe,
                terms: terms && 1,
                photos: Object.keys(photos)
            });
            uploadPromise.then(() => window.location.hash = '');
        }
    }

</script>

{#if uploadPromise}
    <LoadingCover />
{:else}
    {#await userData}
        <Loading />
    {:then data}
        <section>
            <h2>Hello! My first name is</h2>
            <input type='text' bind:value={nickname}/>
        </section>

        <section>
            <h2>I am</h2>
            <GenderSelector bind:selected={selectedGender}/>
        </section>

        <section>
            <h2>I like</h2>
            <i>select multiple</i>
            <GenderSelector bind:selected={selectedSexuality} multiple/>
        </section>

        <section>
            <h2>I was born on</h2>
            <input type='date' bind:value={birthday} />
        </section>

        <section>
            <h2>About me</h2>
            <i>optional</i>
            <textarea rows={5} cols={30} value={aboutMe} on:input={(e) => handleChangeAboutMe(e)}/>
            {#if (aboutMe ?? '').length > 0}
                <span style={`color: ${(aboutMe ?? '').length > 140 ? 'red' : 'unset'}`}>{(aboutMe ?? '').length}/140</span>
            {/if}
        </section>

        <section>
            <h2>Photos</h2>
            <PhotoUpload bind:photos/>
        </section>

        <section>
            <label>
                <input type="checkbox" bind:checked={terms}/>
                I have read and I accept the <a href="/#terms">terms and conditions and privacy policy</a>.
            </label>
        </section>

        {#if unsatisfiedRequirements.length > 0}
            <section class='errors'>
                <ul>
                    {#each unsatisfiedRequirements as req}
                        <li>{req}</li>
                    {/each}
                </ul>
            </section>
        {/if}

        <AlignRight>
            <Button on:click={handleSubmit}>Save</Button>
        </AlignRight>
    {/await}
{/if}

<div class="padding"/>

<div class="actions">
    <Button minor on:click={signOut}>Sign out</Button>
    <Button minor on:click={deleteUser}>Delete account</Button>
</div>


<style>
    textarea {
        font-family: sans-serif;
        font-size: 16px;
        height: 88px;
        padding: 15px;
        margin: 0 -10px;
        width: 300px;
        overflow: hidden;
        line-height: 1.1;
    }
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .errors {
        color: red
    }
    .padding {
        height: 100px;
    }
    i {
        margin-top: -10px;
        margin-bottom: 10px;
    }
</style>
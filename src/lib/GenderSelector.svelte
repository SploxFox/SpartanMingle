<script lang='ts'>

    export let selected: {
        male: boolean,
        female: boolean,
        other: boolean
    };

    export let multiple = false;

    import femaleIcon from '../icons/gender/female.svg';
    import maleIcon from '../icons/gender/male.svg';
    import otherIcon from '../icons/gender/other.svg';
    import { theme } from '../theme';
    import GenderHeartIcon from './GenderHeartIcon.svelte';

    const FemaleIcon = femaleIcon as any;
    const MaleIcon = maleIcon as any;
    const OtherIcon = otherIcon as any;

    $: color = selected.male ? theme.male :
            ( selected.female ? theme.female : theme.other );

    $: index = (selected.male ? 0 : (selected.female ? 1 : (selected.other ? 2 : null)));

    let lastIndex = index;

    let topSelector: HTMLElement;
    let bottomSelector: HTMLElement;

    $: selectionExists = Object.values(selected).some(val => val);
    $: console.log(selectionExists);

    $: renderIndex = selectionExists ? index : lastIndex;

    let transitionActive = false;

    const setGender = (gender: 'male' | 'female' | 'other') => {
        lastIndex = index;
        if (selected[gender]) {
            selected[gender] = false;
            return;
        }

        if (!multiple) {
            selected.male = false;
            selected.female = false;
            selected.other = false;
        }

        selected[gender] = true;

    }
</script>

<div class="wrapper">
    <div class="background">
        {#if !multiple}
            <div
                bind:this={bottomSelector}
                class="selector"
                style={`
                    border-radius: ${selectionExists ? '10px' : '50%'};
                    transform: translateX(${(renderIndex ?? -1) * 100}%) scale(${selectionExists ? 1 : 0});
                    --translate-x: ${(renderIndex ?? -1) * 100}%;
                    animation: ${selectionExists ? '0.3s popIn' : '0.3s popOut'};
                    background-color: ${color};`}/>
        {/if}
        <div style={`background-color: ${theme.male}`}/>
        <div style={`background-color: ${theme.female}`}/>
        <div style={`background-color: ${theme.other}`}/>
    </div>
    <div class="container">
        <button class="icon" on:click={() => setGender('male')}>
            <MaleIcon/>
            <GenderHeartIcon visible={multiple} isActive={selected.male}/>
        </button>
        <button class="icon" on:click={() => setGender('female')}>
            <FemaleIcon/>
            <GenderHeartIcon visible={multiple} isActive={selected.female}/>
        </button>
        <button class="icon" on:click={() => setGender('other')}>
            <OtherIcon/>
            <GenderHeartIcon visible={multiple} isActive={selected.other}/>
        </button>
        {#if !multiple}
            <div 
                bind:this={topSelector}
                class="selector"
                style={`
                    border-radius: ${selectionExists ? '10px' : '50%'};
                    transform: translateX(${(renderIndex ?? -1) * 100}%) scale(${selectionExists ? 1 : 0});
                    --translate-x: ${(renderIndex ?? -1) * 100}%;
                    animation: ${selectionExists ? '0.3s popIn' : '0.3s popOut'};`}/>
        {/if}
    </div>
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
    }
    .wrapper {
        position: relative;
        isolation: isolate;
    }
    .container {
        fill: black;
        background: white;
        isolation: isolate;
        mix-blend-mode: screen;
    }
    .background {
        position: absolute;
        inset: 0;
    }
    .background div {
        width: 64px;
        height: 64px;;
    }
    .selector {
        width: 64px;
        height: 64px;
        position: absolute;
        background-color: white;
        transition: 0.2s transform, 0.2s background-color, 0.4s border-radius;
        border-radius: 15px;
        pointer-events: none;
    }
    .container .selector {
        mix-blend-mode: difference;
    }
    .icon {
        all: unset;
        display: flex;
        transform: scale(1);
        transition: transform 0.2s;
        cursor: pointer;
    }
    .icon:hover {
        transform: scale(0.8);
    }
    .icon :global(svg:nth-child(2)) {
        position: absolute;
        inset: 20px;
        top: 21px;
    }
    .fillIconBg {
        position: absolute;
        inset: 0;
        background-color: white;
    }
</style>
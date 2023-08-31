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
    import femaleSquareIcon from '../icons/gender/femaleSquare.svg';
    import maleSquareIcon from '../icons/gender/maleSquare.svg';
    import otherSquareIcon from '../icons/gender/otherSquare.svg';
    
    import { theme } from '../theme';
    import GenderHeartIcon from './GenderCheckIcon.svelte';

    const FemaleIcon = femaleIcon as any;
    const MaleIcon = maleIcon as any;
    const OtherIcon = otherIcon as any;
    
    const FemaleSquareIcon = femaleSquareIcon as any;
    const MaleSquareIcon = maleSquareIcon as any;
    const OtherSquareIcon = otherSquareIcon as any;

    $: color = selected.male ? theme.male :
            ( selected.female ? theme.female : theme.other );

    $: index = (selected.male ? 0 : (selected.female ? 1 : (selected.other ? 2 : null)));

    let lastIndex = index;

    let topSelector: HTMLElement;
    let bottomSelector: HTMLElement;

    $: selectionExists = Object.values(selected).some(val => val);
    //$: console.log(selectionExists);

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
                    transform: translateX(${(renderIndex ?? -1) * 64}px) scale(${selectionExists ? 1 : 0});
                    --translate-x: ${(renderIndex ?? -1) * 64}px;
                    animation: ${selectionExists ? '0.3s popIn' : '0.3s popOut'};
                    background-color: ${color};`}/>
        {/if}
        <div style={`background-color: ${theme.male}`}/>
        <div style={`background-color: ${theme.female}`}/>
        <div style={`background-color: ${theme.other}`}/>
    </div>
    <div class="container">
        <button class="icon" on:click={() => setGender('male')}>
            {#if multiple}
                <MaleSquareIcon/>
            {:else}
                <MaleIcon/>
            {/if}
            <GenderHeartIcon visible={multiple} isActive={selected.male}/>
        </button>
        <button class="icon" on:click={() => setGender('female')}>
            {#if multiple}
                <FemaleSquareIcon/>
            {:else}
                <FemaleIcon/>
            {/if}
            <GenderHeartIcon visible={multiple} isActive={selected.female}/>
        </button>
        <button class="icon" on:click={() => setGender('other')}>
            {#if multiple}
                <OtherSquareIcon/>
            {:else}
                <OtherIcon/>
            {/if}
            <GenderHeartIcon visible={multiple} isActive={selected.other}/>
        </button>
        {#if !multiple}
            <div 
                bind:this={topSelector}
                class="selector foreground"
                style={`
                    border-radius: ${/*selectionExists ? '10px' : '50%'*/'50%'};
                    transform: translateX(${(renderIndex ?? -1) * 64}px) scale(${selectionExists ? 1 : 0});
                    --translate-x: ${(renderIndex ?? -1) * 64}px;
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
    .background div:not(.selector) {
        width: 64px;
        height: 64px;
    }
    .selector {
        width: 16px;
        height: 16px;
        margin: 24px;
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
        transform: scale(1.1);
    }
    .icon :global(svg:nth-child(2)) {
        position: absolute;
        inset: 18px;
        width: 28px;
    }
    .fillIconBg {
        position: absolute;
        inset: 0;
        background-color: white;
    }
</style>
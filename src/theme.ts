export const getAccentWithOpacity = (opacity: number) => {
    return `linear-gradient(135deg, rgba(255,96,96,${+opacity}) 0%, rgba(255,0,202,${+opacity}) 100%)`;
}

export const theme = {
    male: '#648ceb',
    female: 'pink',
    other: '#b1a1bf',
    accent: getAccentWithOpacity(1),
    accentColor: 'rgb(255,48,149)',
    dislikeColor: '#060a37',
}
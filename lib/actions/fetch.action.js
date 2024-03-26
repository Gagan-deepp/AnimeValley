'use server'

export const fetchAnime = async (page) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=airing&limit=15`);

    const data = response.json()

    return data
}

export const fetchPopularAnime = async (page) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=15`);

    const data = response.json()

    return data
}

export const fetchAnimeData = async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)

    const data = response.json();

    return data;
}
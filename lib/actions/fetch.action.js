'use server'

export const fetchAnime = async (page) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=airing&limit=15`);

    const data = response.json()

    return data
}
export const fetchAnimeMovie = async (page) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?type=movie&filter=bypopularity&limit=15`);

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
export const fetchAnimeImage = async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/pictures`)

    const data = response.json();

    return data;
}

//NOTE: Manga

export const fetchPopularManhua = async (page) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/manga?type=manhua&filter=bypopularity&limit=15`);

    const data = response.json()

    return data
}
export const fetchPopularmanga = async (page) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/manga?filter=bypopularity&limit=15`);

    const data = response.json()

    return data
}

export const fetchPopularManhwa = async (page) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/manga?type=manhwa&filter=bypopularity&limit=15`);

    const data = response.json()

    return data
}

export const fetchPopularLightNovel = async (page) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/manga?type=lightnovel&filter=bypopularity&limit=15`);

    const data = response.json()

    return data
}
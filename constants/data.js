import eigth from '@/public/banner/pic1.jpg'
import cote from '@/public/banner/cot_small.jpg'
import jjk_small from '@/public/banner/jjk_small.jpg'
import spy_small from '@/public/banner/spy_small.jpg'
import haikyuu from '@/public/banner/haikyuu_small.jpg'
import blue from '@/public/banner/blue_small.jpg'
import deathNote from '@/public/banner/death_small.jpg'
import kake from '@/public/banner/kake_small.webp'
import first from '@/public/banner/pic3.jpg'
import firstLogo from '@/public/banner/logo5.png'
import second from '@/public/banner/pic4.jpg'
import secondLogo from '@/public/banner/logo4.png'
import third from '@/public/banner/pic2.jpg'
import thirdLogo from '@/public/banner/logo2.png'
import forth from '@/public/banner/pic5.jpg'
import sixth from '@/public/banner/pic6.jpg'
import sixLogo from '@/public/banner/logo6.png'
import seventh from '@/public/banner/pic7.jpg'
import sevenLogo from '@/public/banner/logo7.png'
import eigthLogo from '@/public/banner/logo8.png'
import forthLogo from '@/public/banner/logo3.png'


export const sildeImgs = [
    {
        src: eigth, alt: 'eight', logo: eigthLogo,
        small: cote,
        name: "Classroom of the Elite ",
        year: '2017',
        desc: "When Kiyotaka enters an elite government-sponsored high school, he finds out just how merit-based this education system is."
    },

    {
        src: third, alt: 'third', logo: thirdLogo,
        small: jjk_small,
        year: '2020',
        name: 'Jujutsu Kaisen', desc: "With his days numbered, high schooler Yuji decides to hunt down and consume the remaining 19 fingers of a deadly curse so it can die with him."
    },

    {
        src: first, alt: 'first', logo: firstLogo,
        small: spy_small,
        year: '2022',
        name: ' Spy x Family ', desc: " A spy, an assassin and a telepath come together to pose as a family, each for their own reasons, while hiding their true identities from each other."
    },

    {
        src: second, alt: 'second', logo: secondLogo,
        small: deathNote,
        year: '2006',
        name: 'Deathnote', desc: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it."
    },

    {
        src: forth, alt: 'forth', logo: forthLogo,
        small: haikyuu,
        year: '2014',
        name: 'Haikyu', desc: "Inspired by a championship match he sees on TV, junior high schooler Hinata joins a volleyball club and begins training, despite his short height."
    },

    {
        src: sixth, alt: 'six', logo: sixLogo,
        small: blue,
        year: '2022',
        name: 'Blue Lock', desc: " High school soccer players from across Japan gather for a controversial project designed to create the best and most egoistic striker in the world."
    },

    {
        src: seventh, alt: 'seven', logo: sevenLogo,
        small: kake,
        year: '2017',
        name: "Kakegurui", desc: "High roller Yumeko Jabami plans to clean house at Hyakkaou Private Academy, a school where students are evaluated solely on their gambling skills."
    },


]

export const navitemData = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Anime',
        href: '/anime',
    },
    {
        name: 'Manga',
        href: '/manga',
    },
    {
        name: 'Community',
        href: '/community',
    },
]
export const sideBarItem = [
    {
        name: 'Home',
        href: '/',
        imgURL: "/assest/home.svg",
        ActiveimgURL: "/assest/homeActive.svg",
    },
    {
        name: 'Anime',
        href: '/anime',
        imgURL: "/assest/anime.svg",
        ActiveimgURL: "/assest/animeActive.svg",
    },
    {
        name: 'Manga',
        href: '/manga',
        imgURL: "/assest/book.svg",
        ActiveimgURL: "/assest/bookActive.svg",
    },
    {
        name: 'Profile',
        href: '/profile',
        imgURL: "/assest/profile.svg",
        ActiveimgURL: "/assest/profileActive.svg",
    },
    {
        name: 'Community',
        href: '/community',
        imgURL: "/assest/comm.svg",
        ActiveimgURL: "/assest/commActive.svg",
    },
]
export const mobileNavItem = [
    {
        name: 'Home',
        href: '/',
        imgURL: "/assest/home.svg",
        ActiveimgURL: "/assest/homeActive.svg",
    },
    {
        name: 'Anime',
        href: '/anime',
        imgURL: "/assest/anime.svg",
        ActiveimgURL: "/assest/animeActive.svg",
    },
    {
        name: 'Manga',
        href: '/manga',
        imgURL: "/assest/book.svg",
        ActiveimgURL: "/assest/bookActive.svg",
    },
    {
        name: 'Profile',
        href: '/profile',
        imgURL: "/assest/profile.svg",
        ActiveimgURL: "/assest/profileActive.svg",
    },
    {
        name: 'Activity',
        href: '/activity',
        imgURL: "/assest/bell.svg",
        ActiveimgURL: "/assest/bellActive.svg",
    },
    {
        name: 'Community',
        href: '/community',
        imgURL: "/assest/home.svg",
        ActiveimgURL: "/assest/homeActive.svg",
    },
]
export const bottomNavItem = [
    {
        name: 'Home',
        href: '/',
        imgURL: "/assest/homeActive.svg",
    },
    {
        name: 'Manga',
        href: '/manga',
        imgURL: "/assest/bottomSearch.svg",
    },

    {
        name: 'Create',
        href: '/create-talk',
        imgURL: "/assest/bottomAddActive.svg",
    },
    {
        name: 'Community',
        href: '/community',
        imgURL: "/assest/commActive.svg",
    },
    {
        name: 'Profile',
        href: '/profile',
        imgURL: "/assest/profileActive.svg",
    },
]

export const ProfileTabs = [
    { value: "Talks", name: "Talks", img: "/assest/bio.svg" },
    { value: "Replies", name: "Replies", img: "/assest/profile.svg" },
    { value: "Bookmarks", name: "Bookmarks", img: "/assest/tag.svg" },
]
export const CommunityTabs = [
    { value: "talks", name: "Talks", img: "/assest/bio.svg" },
    { value: "members", name: "Members", img: "/assest/profile.svg" },
    { value: "requests", name: "Requests", img: "/assest/tag.svg" },
]
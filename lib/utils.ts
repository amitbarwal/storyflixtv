import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getYouTubeId(url: string): string | null {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

export function getYouTubeEmbedUrl(url: string): string | null {
    const videoId = getYouTubeId(url);
    if (!videoId) return null;
    return `https://www.youtube.com/embed/${videoId}`;
}

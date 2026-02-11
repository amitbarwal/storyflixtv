export interface Movie {
    id: string;
    title: string;
    imageUrl: string;
    genres: string[];
    description: string;
    rating?: string;
    duration?: string;
    videoUrl: string;
}

export const movieData: Movie[] = [
    {
        id: "1",
        title: "Love at First Swipe",
        imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
        genres: ["Romance", "Comedy"],
        description: "A modern love story about two strangers who match on a dating app and decide to meet for a blind date that goes hilariously wrong.",
        rating: "4.8",
        duration: "15m",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: "2",
        title: "The CEO's Secret",
        imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80",
        genres: ["Drama", "Thriller"],
        description: "A young intern discovers a shocking secret about the charming CEO of a tech giant that could bring down the entire empire.",
        rating: "4.9",
        duration: "22m",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: "3",
        title: "Midnight Delivery",
        imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80",
        genres: ["Thriller", "Suspense"],
        description: "A food delivery rider gets an unusual request to deliver a package to an abandoned address at midnight.",
        rating: "4.7",
        duration: "18m",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: "4",
        title: "Office Romance",
        imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80",
        genres: ["Romance", "Drama"],
        description: "Two rival colleagues competing for the same promotion find themselves falling for each other against company policy.",
        rating: "4.6",
        duration: "20m",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: "5",
        title: "The Arranged Marriage",
        imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=400&q=80",
        genres: ["Drama", "Family"],
        description: "A touching story about a couple finding love and understanding in a marriage arranged by their traditional families.",
        rating: "4.9",
        duration: "25m",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: "6",
        title: "Campus Diaries",
        imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80",
        genres: ["Youth", "Comedy"],
        description: "Follow a group of freshmen as they navigate friendship, exams, and first loves in their first year of college.",
        rating: "4.5",
        duration: "12m",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: "7",
        title: "Hidden Talent",
        imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
        genres: ["Music", "Drama"],
        description: "A shy street musician goes viral overnight but struggles to handle the sudden fame and pressure.",
        rating: "4.8",
        duration: "16m",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: "8",
        title: "Startup Dreams",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        genres: ["Business", "Inspiration"],
        description: "Three college dropouts try to pitch their crazy app idea to investors in Silicon Valley with only 24 hours to prepare.",
        rating: "4.7",
        duration: "20m",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
];

export interface Movie {
    id: string;
    title: string;
    imageUrl: string;
    genres: string[];
    description: string;
    rating: string;
    duration: string;
    year: string;
}

export const movieData: Movie[] = [
    {
        id: "1",
        title: "Midnight Echo",
        imageUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800&q=80",
        genres: ["Thriller", "Sci-Fi"],
        description: "In a city where silence is currency, a young courier discovers a frequency that can rewrite the past.",
        rating: "4.8",
        duration: "15m",
        year: "2024"
    },
    {
        id: "2",
        title: "Neon Dreams",
        imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
        genres: ["Sci-Fi", "Drama"],
        description: "A hacker navigates a virtual reality that feels more real than her desolate physical world.",
        rating: "4.9",
        duration: "12m",
        year: "2024"
    },
    {
        id: "3",
        title: "The Last Horizon",
        imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
        genres: ["Adventure", "Drama"],
        description: "Two estranged brothers embark on a road trip across a post-apocalyptic landscape to find their childhood home.",
        rating: "4.7",
        duration: "22m",
        year: "2023"
    },
    {
        id: "4",
        title: "Urban Pulse",
        imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&w=800&q=80",
        genres: ["Drama", "Romance"],
        description: "A chance encounter on a late-night subway train changes the lives of two strangers forever.",
        rating: "4.5",
        duration: "18m",
        year: "2024"
    },
    {
        id: "5",
        title: "Silent Deep",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        genres: ["Thriller", "Survival"],
        description: "Trapped in a malfunctioning submarine, a researcher must make a choice that will determine her survival.",
        rating: "4.8",
        duration: "20m",
        year: "2023"
    },
    {
        id: "6",
        title: "Love & Glitch",
        imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
        genres: ["Romance", "Comedy"],
        description: "An AI dating assistant starts developing feelings for its user, leading to chaotic digital love triangles.",
        rating: "4.6",
        duration: "14m",
        year: "2024"
    },
    {
        id: "7",
        title: "Velocity",
        imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
        genres: ["Action", "Racing"],
        description: "An underground street racer risks everything for one final race to clear his family's debt.",
        rating: "4.5",
        duration: "16m",
        year: "2023"
    },
    {
        id: "8",
        title: "Shadows of Tokyo",
        imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
        genres: ["Mystery", "Crime"],
        description: "A private investigator follows a trail of clues through the neon-lit streets of Tokyo to find a missing pop star.",
        rating: "4.7",
        duration: "25m",
        year: "2024"
    }
];

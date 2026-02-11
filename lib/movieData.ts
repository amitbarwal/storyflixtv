export interface Movie {
    id: string;
    title: string;
    imageUrl: string;
    videoUrl: string;
    genres: string[];
    description: string;
    rating?: string;
    duration?: string;
}

export const movieData: Movie[] = [
    {
        id: "aarav-or-kavya-ka-pyar",
        title: "Aarav or Kavya ka Pyar",
        imageUrl: "/movies cover/Aarav or Kavya ka Pyar.jpg",
        videoUrl: "https://vimeo.com/1163959377?fl=tl&fe=ec", // Placeholder video link
        genres: ["Romance", "Drama"],
        description: "A touching story of love and destiny between Aarav and Kavya.",
        rating: "4.8",
        duration: "18m"
    },
    {
        id: "aryan-untold-story",
        title: "Aryan Untold Story",
        imageUrl: "/movies cover/Aryan Untold Story.jpg",
        videoUrl: "https://vimeo.com/1163959426?fl=tl&fe=ec", // Placeholder video link
        genres: ["Drama", "Thriller"],
        description: "Review the hidden chapters of Aryan's life that shaped his mysterious journey.",
        rating: "4.7",
        duration: "22m"
    },
    {
        id: "king-one-sided-love-story",
        title: "King one sided love story",
        imageUrl: "/movies cover/King one sided love story.jpg",
        videoUrl: "https://vimeo.com/1163959482?share=copy&fl=sv&fe=ci", // Placeholder video link
        genres: ["Romance", "Tragedy"],
        description: "A heart-wrenching tale of unrequited love and the sacrifices made for happiness.",
        rating: "4.9",
        duration: "15m"
    },
    {
        id: "princess-marry-to-poor-man",
        title: "Priencess Marry to Poor Man",
        imageUrl: "/movies cover/Priencess Marry to Poor Man.jpg",
        videoUrl: "https://vimeo.com/1163959565?fl=tl&fe=ec", // Placeholder video link
        genres: ["Romance", "Social"],
        description: "A compelling narrative challenging societal norms where love bridges class divides.",
        rating: "4.6",
        duration: "20m"
    },
    {
        id: "the-danger-man-story-of-ghar-jamai",
        title: "The Danger Man- Story of Ghar Jamai",
        imageUrl: "/movies cover/The Danger Man- Story of Ghar Jamai.jpg",
        videoUrl: "https://vimeo.com/1163959702?fl=tl&fe=ec", // Placeholder video link
        genres: ["Action", "Drama"],
        description: "An intense drama unfolding the complexities and challenges of a man living with his in-laws.",
        rating: "4.5",
        duration: "25m"
    }
];

export interface Movie {
    id: string;
    title: string;
    imageUrl: string;
    genres: string[];
    description: string;
    rating?: string;
    duration?: string;
    videoUrl: string;
    slug: string;
}

export const movieData: Movie[] = [
    {
        id: "1",
        title: "The Danger Man: Story of Ghar Jamai",
        imageUrl: "/movies-cover/The Danger Man- Story of Ghar Jamai.jpg",
        genres: ["Drama", "Action"],
        description: "A gripping tale of sacrifice and survival. When a man moves in with his in-laws, he discovers a world of secrets and danger he never expected.",
        rating: "4.9",
        duration: "18m",
        videoUrl: "https://youtu.be/7k1maBibvQ0",
        slug: "the-danger-man-story-of-ghar-jamai"
    },
    {
        id: "2",
        title: "Aarav or Kavya ka Pyar",
        imageUrl: "/movies-cover/Aarav or Kavya ka Pyar.jpg",
        genres: ["Romance", "Drama"],
        description: "A beautiful journey of two souls destined to be together. Despite the odds, their love finds a way to brighten the darkest days.",
        rating: "4.8",
        duration: "15m",
        videoUrl: "https://youtube.com/shorts/VzB8ObrCIfs",
        slug: "aarav-or-kavya-ka-pyar"
    },
    {
        id: "3",
        title: "Aryan: Untold Story",
        imageUrl: "/movies-cover/Aryan Untold Story.jpg",
        genres: ["Action", "Biography"],
        description: "The inspiring journey of a young man who fought against all odds to achieve his dreams. A story of grit, determination, and success.",
        rating: "4.7",
        duration: "22m",
        videoUrl: "https://youtube.com/shorts/MHt2zam6Lsc",
        slug: "aryan-untold-story"
    },
    {
        id: "4",
        title: "King: One Sided Love Story",
        imageUrl: "/movies-cover/King one sided love story.jpg",
        genres: ["Romance", "Musical"],
        description: "Sometimes love is a solo journey. Follow the emotional path of a man who gives his all to someone who may never love him back.",
        rating: "4.6",
        duration: "20m",
        videoUrl: "https://youtu.be/Tn0r_WyRw0I",
        slug: "king-one-sided-love-story"
    },
    {
        id: "5",
        title: "Princess Marry to Poor Man",
        imageUrl: "/movies-cover/Priencess Marry to Poor Man.jpg",
        genres: ["Family", "Drama"],
        description: "A classic tale of love crossing social boundaries. A princess chooses her heart over her crown in this touching family drama.",
        rating: "4.9",
        duration: "25m",
        videoUrl: "https://youtu.be/j19Cl-n6Keg",
        slug: "princess-marry-to-poor-man"
    }
];

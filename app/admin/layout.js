import "../globals.css";

export const metadata = {
    title: "Admin Dashboard | StoryFlix TV",
    description: "Manage dramas and content",
};

export default function AdminLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-gray-950 text-white antialiased">
                {children}
            </body>
        </html>
    );
}

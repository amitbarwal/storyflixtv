'use client';

import React, { useState, useEffect } from 'react';
import {
    Plus,
    Search,
    Edit2,
    Trash2,
    ExternalLink,
    LayoutDashboard,
    Film,
    Star,
    Clock,
    X,
    Save,
    AlertCircle,
    Menu
} from 'lucide-react';
import { movieData as initialMovieData } from '@/lib/movieData';

export default function AdminPage() {
    const [dramas, setDramas] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingDrama, setEditingDrama] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        imageUrl: '',
        videoUrl: '',
        genres: '',
        description: '',
        rating: '5.0',
        duration: '',
        slug: ''
    });

    useEffect(() => {
        // In a real app, this would fetch from an API
        setDramas(initialMovieData);
    }, []);

    const filteredDramas = dramas.filter(drama =>
        drama.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (drama.genres && drama.genres.some(g => g.toLowerCase().includes(searchTerm.toLowerCase())))
    );

    const handleOpenModal = (drama = null) => {
        if (drama) {
            setEditingDrama(drama);
            setFormData({
                ...drama,
                genres: drama.genres ? drama.genres.join(', ') : ''
            });
        } else {
            setEditingDrama(null);
            setFormData({
                title: '',
                imageUrl: '',
                videoUrl: '',
                genres: '',
                description: '',
                rating: '5.0',
                duration: '',
                slug: ''
            });
        }
        setIsModalOpen(true);
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this drama?')) {
            setDramas(dramas.filter(d => d.id !== id));
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        const dramaData = {
            ...formData,
            id: editingDrama ? editingDrama.id : Math.random().toString(36).substr(2, 9),
            genres: typeof formData.genres === 'string' ? formData.genres.split(',').map(g => g.trim()).filter(Boolean) : formData.genres,
            slug: formData.slug || formData.title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '')
        };

        if (editingDrama) {
            setDramas(dramas.map(d => d.id === editingDrama.id ? dramaData : d));
        } else {
            setDramas([dramaData, ...dramas]);
        }
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-indigo-500/30 flex">
            {/* Sidebar - Desktop Only */}
            <aside className="fixed left-0 top-0 h-full w-64 bg-black/40 backdrop-blur-xl border-r border-white/10 p-6 hidden lg:flex flex-col z-20">
                <div className="flex items-center gap-3 mb-10 px-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                        <Film className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        StoryFlix Admin
                    </h1>
                </div>

                <nav className="space-y-2 flex-1">
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20 transition-all">
                        <LayoutDashboard className="w-5 h-5" />
                        <span className="font-medium">Manage Dramas</span>
                    </button>
                </nav>

                <div className="mt-auto">
                    <div className="p-4 glass-card rounded-xl">
                        <p className="text-xs text-gray-500 mb-1">System Status</p>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <p className="text-sm font-medium">Synced</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 lg:ml-64 min-h-screen flex flex-col">
                {/* Mobile Navbar */}
                <div className="lg:hidden p-4 bg-black/40 backdrop-blur-md border-b border-white/10 flex items-center justify-between sticky top-0 z-30">
                    <div className="flex items-center gap-2">
                        <Film className="w-6 h-6 text-indigo-500" />
                        <span className="font-bold">Admin Panel</span>
                    </div>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-6 md:p-10 flex-1">
                    {/* Header Section */}
                    <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                        <div>
                            <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">Dramas Library</h1>
                            <p className="text-gray-400 text-lg">Inventory management for premium short series</p>
                        </div>
                        <button
                            onClick={() => handleOpenModal()}
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all shadow-xl shadow-indigo-600/30 active:scale-95"
                        >
                            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                            Add New Drama
                        </button>
                    </header>

                    {/* Statistics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            { label: 'Published Dramas', value: dramas.length, icon: Film, color: 'text-blue-400', bg: 'bg-blue-500/10' },
                            { label: 'Avg User Rating', value: '4.9', icon: Star, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
                            { label: 'System Health', value: 'Good', icon: Clock, color: 'text-emerald-400', bg: 'bg-emerald-500/10' }
                        ].map((stat, i) => (
                            <div key={i} className="glass-card p-8 flex items-center gap-6 group hover:border-white/20 transition-all">
                                <div className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center border border-white/5 ${stat.color} shadow-inner`}>
                                    <stat.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">{stat.label}</p>
                                    <h3 className="text-3xl font-black mt-1">{stat.value}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Table Container */}
                    <div className="glass-card overflow-hidden bg-gray-900/20">
                        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="relative flex-1 max-w-lg">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Filter dramas by title, genre, or slug..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all placeholder:text-gray-600"
                                />
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="bg-white/5 text-gray-500 text-[11px] font-black uppercase tracking-[0.2em]">
                                        <th className="px-8 py-5">Content Details</th>
                                        <th className="px-8 py-5">Categories</th>
                                        <th className="px-8 py-5">Rating</th>
                                        <th className="px-8 py-5">Length</th>
                                        <th className="px-8 py-5 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {filteredDramas.map((drama) => (
                                        <tr key={drama.id} className="hover:bg-white/[0.02] transition-colors group">
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-14 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-black border border-white/10 shadow-2xl relative">
                                                        {drama.imageUrl ? (
                                                            <img src={drama.imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                                        ) : (
                                                            <div className="w-full h-full flex items-center justify-center">
                                                                <Film className="w-6 h-6 text-gray-800" />
                                                            </div>
                                                        )}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-white text-lg group-hover:text-indigo-400 transition-colors">{drama.title}</p>
                                                        <div className="flex items-center gap-3 mt-1.5">
                                                            <span className="text-xs font-mono text-gray-500 bg-white/5 px-1.5 py-0.5 rounded">ID: {drama.id.slice(0, 4)}</span>
                                                            <span className="text-xs text-indigo-400 font-medium">/{drama.slug}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex flex-wrap gap-2">
                                                    {drama.genres && drama.genres.map((genre, idx) => (
                                                        <span key={idx} className="px-3 py-1 bg-white/5 text-gray-400 text-[10px] font-black rounded-full border border-white/10 uppercase tracking-wider group-hover:bg-indigo-500/10 group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-all">
                                                            {genre}
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-2 text-yellow-500 font-black text-lg">
                                                    <Star className="w-5 h-5 fill-current" />
                                                    <span>{drama.rating || '5.0'}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-sm text-gray-500 font-bold uppercase tracking-widest">{drama.duration || '--'}</td>
                                            <td className="px-8 py-6 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                                                    <button
                                                        onClick={() => handleOpenModal(drama)}
                                                        className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-2xl transition-all border border-white/5"
                                                        title="Edit Media"
                                                    >
                                                        <Edit2 className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(drama.id)}
                                                        className="p-3 bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-2xl transition-all border border-white/5"
                                                        title="Delete"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                    <a
                                                        href={`/dramas/${drama.slug}`}
                                                        target="_blank"
                                                        className="p-3 bg-white/5 hover:bg-indigo-500/20 text-gray-400 hover:text-indigo-400 rounded-2xl transition-all border border-white/5"
                                                        title="Preview Content"
                                                    >
                                                        <ExternalLink className="w-5 h-5" />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {filteredDramas.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-32 text-center bg-white/[0.01]">
                                <div className="w-24 h-24 bg-white/5 rounded-[2.5rem] flex items-center justify-center mb-8 border border-white/5 shadow-inner">
                                    <Search className="w-10 h-10 text-gray-700" />
                                </div>
                                <h4 className="text-2xl font-black mb-3">No matching results</h4>
                                <p className="text-gray-500 max-w-sm px-6">We couldn't find any media entry matching "{searchTerm}". Try a different term or create a new entry.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Modern Entry Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12">
                    <div
                        className="absolute inset-0 bg-gray-950/90 backdrop-blur-xl animate-in fade-in duration-500"
                        onClick={() => setIsModalOpen(false)}
                    ></div>
                    <div className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] shadow-[0_0_100px_rgba(79,70,229,0.15)] flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
                        <div className="p-10 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-gray-900/50 to-transparent">
                            <div>
                                <h3 className="text-3xl font-black flex items-center gap-4">
                                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
                                        {editingDrama ? <Edit2 className="w-6 h-6 text-white" /> : <Plus className="w-6 h-6 text-white" />}
                                    </div>
                                    {editingDrama ? 'Modify Content' : 'New Story Entry'}
                                </h3>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-full transition-all active:scale-90"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Official Title</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        placeholder="Enter movie title"
                                        className="w-full bg-black border border-white/10 rounded-2xl py-5 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all hover:bg-white/[0.02]"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Genre Categorization</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.genres}
                                        onChange={(e) => setFormData({ ...formData, genres: e.target.value })}
                                        placeholder="Action, Drama, Thriller..."
                                        className="w-full bg-black border border-white/10 rounded-2xl py-5 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all hover:bg-white/[0.02]"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Poster Asset URL</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.imageUrl}
                                        onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                                        placeholder="/assets/poster.jpg"
                                        className="w-full bg-black border border-white/10 rounded-2xl py-5 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all hover:bg-white/[0.02]"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Video Source Path</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.videoUrl}
                                        onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                                        placeholder="https://vimeo.com/..."
                                        className="w-full bg-black border border-white/10 rounded-2xl py-5 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all hover:bg-white/[0.02]"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Rating Score</label>
                                    <input
                                        type="text"
                                        value={formData.rating}
                                        onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                                        placeholder="4.9"
                                        className="w-full bg-black border border-white/10 rounded-2xl py-5 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all hover:bg-white/[0.02]"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Total Runtime</label>
                                    <input
                                        type="text"
                                        value={formData.duration}
                                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                        placeholder="25m"
                                        className="w-full bg-black border border-white/10 rounded-2xl py-5 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all hover:bg-white/[0.02]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Narrative Description</label>
                                <textarea
                                    rows="5"
                                    required
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    placeholder="Summarize the drama's plot and highlights..."
                                    className="w-full bg-black border border-white/10 rounded-[2rem] py-6 px-8 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all hover:bg-white/[0.02] resize-none custom-scrollbar shadow-inner"
                                ></textarea>
                            </div>

                            {editingDrama && (
                                <div className="p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-[1.5rem] flex gap-5 text-indigo-400/80 items-center">
                                    <AlertCircle className="w-6 h-6 flex-shrink-0 text-indigo-400" />
                                    <div>
                                        <p className="font-black text-indigo-400 uppercase tracking-tighter">SEO & Routing Preview</p>
                                        <p className="text-sm mt-0.5 font-mono">storyflixtv.com/dramas/{formData.slug || 'generating...'}</p>
                                    </div>
                                </div>
                            )}
                        </form>

                        <div className="p-10 border-t border-white/5 flex gap-5 bg-black/40 backdrop-blur-md">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="flex-1 py-5 px-8 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all border border-white/5"
                            >
                                Discard Changes
                            </button>
                            <button
                                onClick={handleSave}
                                className="flex-[2] py-5 px-8 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-indigo-600/40 flex items-center justify-center gap-3 active:scale-95"
                            >
                                <Save className="w-5 h-5 shadow-sm" />
                                {editingDrama ? 'Update Registry' : 'Publish to Library'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Global Aesthetics */}
            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          border: 2px solid rgba(0, 0, 0, 0);
          background-clip: padding-box;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(99, 102, 241, 0.2);
          background-clip: padding-box;
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoom-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-in {
          animation-fill-mode: forwards;
        }
        .fade-in {
          animation-name: fade-in;
        }
        .zoom-in-95 {
          animation-name: zoom-in;
        }
      `}</style>
        </div>
    );
}

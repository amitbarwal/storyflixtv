'use client';

import React, { useState, useEffect } from 'react';
import {
    Plus,
    Search,
    Edit2,
    Trash2,
    ExternalLink,
    Film,
    Star,
    Clock,
    X,
    Save,
    AlertCircle,
    Image as ImageIcon,
    Youtube
} from 'lucide-react';
import { movieData as initialMovieData } from '@/lib/movieData';

// New interface based on user requirements
interface Drama {
    id: string; // derived from slug
    title: string;
    coverImage: string;
    genres: string[];
    description: string;
    rating: string;
    durationLimit: number;
    teaserVideoUrl: string;
    fullVideoUrl: string;
    createdAt: string; // ISO string
    duration?: string; // Optional display duration
}

export default function DramasPage() {
    const [dramas, setDramas] = useState<Drama[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingDrama, setEditingDrama] = useState<Drama | null>(null);

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        coverImage: '',
        fullVideoUrl: '',
        teaserVideoUrl: '',
        genres: '',
        description: '',
        rating: '5.0',
        duration: '',
        durationLimit: '0',
        slug: ''
    });

    // Load from localStorage on mount
    useEffect(() => {
        const storedDramas = localStorage.getItem('dramas');
        if (storedDramas) {
            try {
                const parsedDramas = JSON.parse(storedDramas);
                // Basic validation/migration: ensure required fields exist
                const migratedDramas = parsedDramas.map((d: any) => ({
                    id: d.id,
                    title: d.title,
                    coverImage: d.coverImage || d.imageUrl || '',
                    genres: d.genres || [],
                    description: d.description || '',
                    rating: d.rating || '5.0',
                    durationLimit: d.durationLimit || 0,
                    teaserVideoUrl: d.teaserVideoUrl || d.teaserUrl || '',
                    fullVideoUrl: d.fullVideoUrl || d.videoUrl || '',
                    createdAt: d.createdAt || new Date().toISOString(),
                    duration: d.duration || ''
                }));
                setDramas(migratedDramas);
            } catch (e) {
                console.error("Failed to parse dramas from localStorage", e);
                // Fallback or empty if totally corrupt
                setDramas([]);
            }
        } else {
            // Migration from static movieData if local storage is empty
            const initialDramas: Drama[] = initialMovieData.map(m => ({
                id: m.slug, // Use slug as ID per requirement
                title: m.title,
                coverImage: m.imageUrl,
                genres: m.genres,
                description: m.description,
                rating: m.rating || '5.0',
                durationLimit: 0,
                teaserVideoUrl: '',
                fullVideoUrl: m.videoUrl,
                createdAt: new Date().toISOString(),
                duration: m.duration
            }));
            setDramas(initialDramas);
        }
    }, []);

    // Save to localStorage whenever dramas change
    useEffect(() => {
        if (dramas.length > 0) {
            localStorage.setItem('dramas', JSON.stringify(dramas));
        }
    }, [dramas]);

    const filteredDramas = dramas.filter(drama =>
        drama.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (drama.genres && drama.genres.some(g => g.toLowerCase().includes(searchTerm.toLowerCase())))
    );

    const handleOpenModal = (drama: Drama | null = null) => {
        if (drama) {
            setEditingDrama(drama);
            setFormData({
                title: drama.title,
                coverImage: drama.coverImage,
                fullVideoUrl: drama.fullVideoUrl,
                teaserVideoUrl: drama.teaserVideoUrl,
                genres: drama.genres.join(', '),
                description: drama.description,
                rating: drama.rating,
                duration: drama.duration || '',
                durationLimit: drama.durationLimit.toString(),
                slug: drama.id // ID is the slug
            });
        } else {
            setEditingDrama(null);
            setFormData({
                title: '',
                coverImage: '',
                fullVideoUrl: '',
                teaserVideoUrl: '',
                genres: '',
                description: '',
                rating: '5.0',
                duration: '',
                durationLimit: '0',
                slug: ''
            });
        }
        setIsModalOpen(true);
    };

    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this drama?')) {
            const newDramas = dramas.filter(d => d.id !== id);
            setDramas(newDramas);
            localStorage.setItem('dramas', JSON.stringify(newDramas));
        }
    };

    const extractYoutubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    // Auto-fetch thumbnail logic
    // This is now automatically triggered on URL change, or manually via button
    // It's separated here for reuse
    const getThumbnailUrl = (videoUrl: string) => {
        const videoId = extractYoutubeId(videoUrl);
        if (videoId) {
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
        return null;
    };

    const handleAutoFetchThumbnail = () => {
        const videoUrlToUse = formData.fullVideoUrl || formData.teaserVideoUrl;
        if (!videoUrlToUse) {
            alert("Please enter a Full Video URL or Teaser URL first.");
            return;
        }
        const thumbUrl = getThumbnailUrl(videoUrlToUse);
        if (thumbUrl) {
            setFormData({ ...formData, coverImage: thumbUrl });
        } else {
            alert("Could not extract YouTube ID from the URL.");
        }
    };

    // New: Handle input change for video URLs to auto-suggest or set thumbnail if empty
    const handleVideoUrlChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'fullVideoUrl' | 'teaserVideoUrl') => {
        const val = e.target.value;
        const newFormData = { ...formData, [field]: val };

        // If cover image is empty, try to auto-fetch from this new URL immediately
        if (!formData.coverImage && val) {
            const thumbUrl = getThumbnailUrl(val);
            if (thumbUrl) {
                newFormData.coverImage = thumbUrl;
            }
        }

        setFormData(newFormData);
    };

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();

        // Generate slug from title if not provided explicitly
        const finalSlug = formData.slug || generateSlug(formData.title);

        const dramaData: Drama = {
            id: finalSlug, // User request: "id (slug from title)"
            title: formData.title,
            coverImage: formData.coverImage,
            fullVideoUrl: formData.fullVideoUrl,
            teaserVideoUrl: formData.teaserVideoUrl,
            genres: formData.genres.split(',').map(g => g.trim()).filter(Boolean),
            description: formData.description,
            rating: formData.rating,
            durationLimit: parseInt(formData.durationLimit) || 0,
            createdAt: editingDrama ? editingDrama.createdAt : new Date().toISOString(),
            duration: formData.duration
        };

        if (editingDrama) {
            // If updating, we map by the *original* ID in case slug changed (complex, but strictly updating by old ID is safer usually)
            // However, if ID IS the slug, changing slug changes ID.
            // Let's assume we replace the old entry with the new one.
            setDramas(dramas.map(d => d.id === editingDrama.id ? dramaData : d));
        } else {
            // Check for duplicate ID
            if (dramas.some(d => d.id === dramaData.id)) {
                alert('A drama with this generated ID (slug) already exists. Please change the title or custom slug.');
                return;
            }
            setDramas([dramaData, ...dramas]);
        }
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-transparent text-white font-sans selection:bg-indigo-500/30 p-6 md:p-10">

            {/* Header Section */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Manage Dramas</h1>
                    <p className="text-gray-400 text-sm">Create, edit, and organize your content library</p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="group flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/20 active:scale-95 text-sm"
                >
                    <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                    Add New Drama
                </button>
            </header>

            {/* Main Content */}
            <div className="space-y-8">

                {/* Search Bar */}
                <div className="glass-card p-1 rounded-2xl max-w-md">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search by title or genre..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-transparent border-none py-3 pl-12 pr-4 text-sm text-white focus:outline-none placeholder:text-gray-600"
                        />
                    </div>
                </div>

                {/* Dramas Grid List */}
                <div className="grid grid-cols-1 gap-4">
                    {filteredDramas.map((drama) => (
                        <div key={drama.id} className="glass-card p-4 flex flex-col sm:flex-row gap-6 items-start sm:items-center group hover:bg-white/[0.02] transition-colors">

                            {/* Image Thumbnail */}
                            <div className="w-full sm:w-32 aspect-video sm:aspect-[3/4] rounded-lg overflow-hidden bg-black relative border border-white/10 flex-shrink-0">
                                {drama.coverImage ? (
                                    <img src={drama.coverImage} alt={drama.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-900">
                                        <Film className="w-8 h-8 text-gray-700" />
                                    </div>
                                )}
                            </div>

                            {/* Content Info */}
                            <div className="flex-1 min-w-0 space-y-2">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="font-bold text-lg text-white truncate pr-4">{drama.title}</h3>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {drama.genres && drama.genres.map((genre, idx) => (
                                                <span key={idx} className="px-2 py-0.5 bg-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-wider rounded border border-white/10">
                                                    {genre}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-yellow-500 font-bold bg-yellow-500/10 px-2 py-1 rounded text-xs">
                                        <Star className="w-3.5 h-3.5 fill-current" />
                                        {drama.rating || 'N/A'}
                                    </div>
                                </div>

                                <p className="text-gray-500 text-sm line-clamp-2 pr-4">{drama.description}</p>

                                <div className="flex items-center gap-4 text-xs text-gray-600 font-mono mt-1">
                                    <span>ID: {drama.id}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {drama.duration}</span>
                                    {drama.durationLimit ? (
                                        <span className="text-indigo-400">• Limit: {drama.durationLimit}m</span>
                                    ) : null}
                                    <span className="text-gray-700">• {new Date(drama.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex sm:flex-col gap-2 w-full sm:w-auto mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-white/5">
                                <button
                                    onClick={() => handleOpenModal(drama)}
                                    className="flex-1 sm:flex-none p-2.5 bg-white/5 hover:bg-indigo-500/20 text-gray-400 hover:text-indigo-400 rounded-lg transition-all border border-white/5 flex items-center justify-center gap-2 sm:gap-0"
                                    title="Edit"
                                >
                                    <Edit2 className="w-4 h-4" />
                                    <span className="sm:hidden text-xs font-bold">Edit</span>
                                </button>
                                <button
                                    onClick={() => handleDelete(drama.id)}
                                    className="flex-1 sm:flex-none p-2.5 bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-lg transition-all border border-white/5 flex items-center justify-center gap-2 sm:gap-0"
                                    title="Delete"
                                >
                                    <Trash2 className="w-4 h-4" />
                                    <span className="sm:hidden text-xs font-bold">Delete</span>
                                </button>
                                <a
                                    href={`/dramas/${drama.id}`}
                                    target="_blank"
                                    className="flex-1 sm:flex-none p-2.5 bg-white/5 hover:bg-emerald-500/20 text-gray-400 hover:text-emerald-400 rounded-lg transition-all border border-white/5 flex items-center justify-center gap-2 sm:gap-0"
                                    title="View Live"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span className="sm:hidden text-xs font-bold">View</span>
                                </a>
                            </div>
                        </div>
                    ))}

                    {filteredDramas.length === 0 && (
                        <div className="text-center py-20 bg-white/[0.02] rounded-2xl border border-white/5 border-dashed">
                            <Film className="w-12 h-12 text-gray-800 mx-auto mb-4" />
                            <p className="text-gray-500 font-medium">No dramas found matching your search.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Edit/Create Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
                        onClick={() => setIsModalOpen(false)}
                    ></div>
                    <div className="relative w-full max-w-3xl bg-[#0F0F0F] border border-white/10 rounded-2xl shadow-2xl flex flex-col my-8 animate-in zoom-in-95 duration-300 max-h-[90vh]">

                        {/* Modal Header */}
                        <div className="px-8 py-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02] shrink-0 sticky top-0 bg-[#0F0F0F] z-10 rounded-t-2xl">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                {editingDrama ? <Edit2 className="w-5 h-5 text-indigo-500" /> : <Plus className="w-5 h-5 text-indigo-500" />}
                                {editingDrama ? 'Edit Drama Details' : 'Add New Drama'}
                            </h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">

                            {/* Section 1: Basic Info */}
                            <div className="space-y-6">
                                <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest border-b border-white/5 pb-2">Basic Information</h4>

                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Drama Title <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all outline-none"
                                        placeholder="e.g. The Untold Story"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Genres <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.genres}
                                            onChange={(e) => setFormData({ ...formData, genres: e.target.value })}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all outline-none"
                                            placeholder="Drama, Action, Thriller..."
                                        />
                                        <p className="text-[10px] text-gray-600 mt-1">Separate multiple genres with commas</p>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Rating (1-5) <span className="text-red-500">*</span></label>
                                        <input
                                            type="number"
                                            min="1"
                                            max="5"
                                            step="0.1"
                                            required
                                            value={formData.rating}
                                            onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all outline-none"
                                            placeholder="4.9"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Description <span className="text-red-500">*</span></label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all outline-none resize-none"
                                        placeholder="Enter a compelling description of the drama..."
                                    ></textarea>
                                </div>
                            </div>

                            {/* Section 2: Media & Assets */}
                            <div className="space-y-6">
                                <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest border-b border-white/5 pb-2">Media Assets</h4>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <Youtube className="w-3 h-3 text-red-500" /> Full Video URL <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="url"
                                            required
                                            value={formData.fullVideoUrl}
                                            onChange={(e) => handleVideoUrlChange(e, 'fullVideoUrl')}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all outline-none"
                                            placeholder="https://youtube.com/watch?v=..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <Youtube className="w-3 h-3 text-gray-500" /> Teaser URL (Optional)
                                        </label>
                                        <input
                                            type="url"
                                            value={formData.teaserVideoUrl}
                                            onChange={(e) => handleVideoUrlChange(e, 'teaserVideoUrl')}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all outline-none"
                                            placeholder="https://youtube.com/shorts/..."
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center justify-between">
                                        <span>Cover Image <span className="text-red-500">*</span></span>
                                        <button
                                            type="button"
                                            onClick={handleAutoFetchThumbnail}
                                            className="text-[10px] bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white px-2 py-0.5 rounded transition-all flex items-center gap-1"
                                        >
                                            <Youtube className="w-3 h-3" /> Auto-fetch from YouTube
                                        </button>
                                    </label>
                                    <div className="flex gap-2">
                                        <div className="relative flex-1">
                                            <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                            <input
                                                type="url"
                                                required
                                                value={formData.coverImage}
                                                onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                                                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all outline-none"
                                                placeholder="https://example.com/image.jpg"
                                            />
                                        </div>
                                        {formData.coverImage && (
                                            <div className="w-12 h-11 rounded-lg border border-white/10 overflow-hidden bg-black shrink-0">
                                                <img src={formData.coverImage} alt="Preview" className="w-full h-full object-cover" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <Clock className="w-3 h-3 text-gray-500" /> Display Duration (e.g. 25m)
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.duration}
                                            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all outline-none"
                                            placeholder="20m"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <Clock className="w-3 h-3 text-indigo-400" /> Play Limit (Minutes) <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            required
                                            min="0"
                                            value={formData.durationLimit}
                                            onChange={(e) => setFormData({ ...formData, durationLimit: e.target.value })}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all outline-none"
                                            placeholder="0 for unlimited"
                                        />
                                        <p className="text-[10px] text-gray-600 mt-1">Set to 0 for no limit</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Advanced */}
                            <div className="space-y-6">
                                <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest border-b border-white/5 pb-2">Advanced Settings</h4>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Custom Slug (ID)</label>
                                    <input
                                        type="text"
                                        value={formData.slug}
                                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all outline-none"
                                        placeholder="custom-url-slug"
                                    />
                                    <p className="text-[10px] text-gray-500 mt-1">This will be used as the unique ID and URL for the drama.</p>
                                </div>
                                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                                    <div className="text-xs">
                                        <p className="font-bold text-indigo-300 mb-1">Preview URL</p>
                                        <code className="text-indigo-400/80 break-all">
                                            /dramas/{formData.slug || (formData.title ? formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : '...')}
                                        </code>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="pt-6 border-t border-white/10 flex gap-4 sticky bottom-0 bg-[#0F0F0F] pb-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 py-3 px-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold text-sm transition-all border border-white/5"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-[2] py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2"
                                >
                                    <Save className="w-4 h-4" />
                                    {editingDrama ? 'Save Changes' : 'Create Drama'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Styles */}
            <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
        </div>
    );
}

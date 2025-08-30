import { useState } from 'react';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Note{
    id:number,
    name:string,
    description:string,
    category:string,
}

export default function NoteSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;
        
        const response = await fetch(`/note/search?query=${encodeURIComponent(searchQuery)}`);
        const results = await response.json();
        setSearchResults(results);
    };

    // const handleKeyPress = (e: React.KeyboardEvent) => {
    //     if (e.key === 'Enter') {
    //         handleSearch();
    //     }
    // };

    return (
        <div className="py-12">
            <Head title="Search Notes" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                <div className="bg-black overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-6">Search Notes</h2>
                    
                    <div className="flex gap-4 mb-6">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            // onKeyPress={handleKeyPress}
                            placeholder="Search by title..."
                            className="flex-1 border rounded px-3 py-2"
                        />
                        <Button
                            onClick={handleSearch}
                            className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500"
                        >
                            Search
                        </Button>
                    </div>

                    {searchResults.length > 0 ? (
                        <div className="grid gap-4">
                            {searchResults.map((note: Note) => (
                                <div key={note.id} className="border rounded p-4">
                                    <h3 className="font-semibold">{note.name}</h3>
                                    <p className="text-gray-600">{note.description}</p>
                                    <p className="text-sm text-gray-500">Category: {note.category}</p>
                                </div>
                            ))}
                        </div>
                    ) : searchQuery && (
                        <p className="text-gray-500 text-center py-8">No notes found matching "{searchQuery}"</p>
                    )}
                </div>
            </div>
        </div>
    );
}
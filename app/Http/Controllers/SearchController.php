<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Note;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class SearchController extends Controller
{
   public function search(Request $request)
{
    $search = $request->get('query');
    $userId = Auth::id();
    
    if (empty($search) || !$userId) {
        return response()->json([]);
    }
    
    $notes = Note::where('user_id', $userId)
                 ->where('name', 'like', "%{$search}%")
                 ->get();
    
    return response()->json($notes);
}
    public function searchPage() {
    return Inertia::render('Note/search');
}
}

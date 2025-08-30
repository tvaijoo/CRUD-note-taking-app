<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Note;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class SearchController extends Controller
{
    public function searchPage(Request $request)
    {
        $query = $request->get('query');

        if ($query) {
            $userId = Auth::id();
            if (!$userId)
                return response()->json([]);

            $notes = Note::where('user_id', $userId)
                ->where('name', 'like', "%{$query}%")
                ->get();

            return response()->json($notes);
        }

        return Inertia::render('Note/search');
    }
}
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Note;
use Illuminate\Support\Facades\Auth;

class NoteController extends Controller
{
    public function index(){
        $userId = Auth::id();
        if (!$userId) {
            abort(401);
        }
        $notes = Note::where('user_id', $userId)->get();
        return Inertia::render('Note/index',compact('notes'));
    }
    public function create(){
        return Inertia::render('Note/create');
    }
    public function store(Request $request){
        $userId = Auth::id();
        if (!$userId) {
            abort(401);
        }
        
        $request->validate(['name'=>'required|string|max:255',
        'category'=>'required|string|max:255',
        'description'=>'nullable|string']);

        Note::create([
            'name' => $request->input('name'),
            'category' => $request->input('category'),
            'description' => $request->input('description'),
            'user_id' => $userId,
        ]);
        return redirect()->route('note.index')->with('message','Note added successfully!');
    }
    public function edit(Note $note){
        $userId = Auth::id();
        if (!$userId) {
            abort(401);
        }
        // Ensure user can only edit their own notes
        if ($note->user_id !== $userId) {
            abort(403);
        }
        return inertia::render('Note/edit',compact('note'));
    }
    public function update(Request $request,    Note $note){
        $userId = Auth::id();
        if (!$userId) {
            abort(401);
        }
        // Ensure user can only update their own notes
        if ($note->user_id !== $userId) {
            abort(403);
        }
        
        $request->validate(['name'=>'required|string|max:255',
        'category'=>'required|string|max:255',
        'description'=>'nullable|string']);

        $note->update([
            'name'=>$request->input('name'),
            'category'=>$request->input('category'),
            'description'=>$request->input('description'),
        ]);
        return redirect()->route('note.index')->with('message','Note update successfully');
    }
    public function destroy(Note $note){
        $userId = Auth::id();
        if (!$userId) {
            abort(401);
        }
        // Ensure user can only delete their own notes
        if ($note->user_id !== $userId) {
            abort(403);
        }
        $note->delete();
        return redirect()->route('note.index')->with('message','Note deleted successfully');
    }
}

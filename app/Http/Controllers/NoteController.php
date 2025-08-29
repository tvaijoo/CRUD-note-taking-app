<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Note;

class NoteController extends Controller
{
    public function index(){
        $notes=Note::all();
        return Inertia::render('Note/index',compact('notes'));
    }
    public function create(){
        return Inertia::render('Note/create');
    }
    public function store(Request $request){
        $request->validate(['name'=>'required|string|max:255',
        'category'=>'required|string|max:255',
        'description'=>'nullable|string']);

        Note::create($request->all());
        return redirect()->route('note.index')->with('message','Note added successfully!');
    }
    public function edit(Note $note){
return inertia::render('Note/edit',compact('note'));
    }
    public function update(Request $request,    Note $note){
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
        $note->delete();
        return redirect()->route('note.index')->with('message','Note deleted successfully');
    }
}

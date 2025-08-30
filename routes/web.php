<?php

use App\Http\Controllers\NoteController;
use App\Http\Controllers\SearchController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/note', function () {
    return Inertia::render('Note');
});

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/note', [NoteController::class, 'index'])->name('note.index');      
    Route::get('/note/create', [NoteController::class, 'create'])->name('note.create'); 
    Route::post('/note', [NoteController::class, 'store'])->name('note.store');       

    Route::get('/note/{note}/edit', [NoteController::class, 'edit'])->name('note.edit'); 
    Route::put('/note/{note}', [NoteController::class, 'update'])->name('note.update'); 
    Route::delete('/note/{note}', [NoteController::class, 'destroy'])->name('note.destroy'); 

    Route::get('/note/search', [SearchController::class, 'searchPage'])->name('note.search');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
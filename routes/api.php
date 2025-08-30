<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::prefix('auth')->group(function () {
	// Public
	Route::post('/register', [AuthController::class, 'register'])->name('register');
	Route::post('/login', [AuthController::class, 'login'])->name('login');

	// Protected
	Route::middleware('auth:api')->group(function () {
		Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
		Route::post('/refresh', [AuthController::class, 'refresh'])->name('refresh');
		Route::post('/me', [AuthController::class, 'me'])->name('me');
	});
});
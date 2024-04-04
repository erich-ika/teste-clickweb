<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NoticiasController;
use App\Http\Controllers\FilmeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/test', function() {
    return File::get(public_path() . '/teste1/index.html');
});

Route::get('/noticias', [NoticiasController::class, 'index']);
Route::get('/noticias/{id}', [NoticiasController::class, 'noticia'])->name('noticia');

Route::get('/filmes', [FilmeController::class, 'filmes1'])->name('filmeshome');
Route::get('/filmes/{id}', [FilmeController::class, 'filmes'])->name('filmes');

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class FilmeController extends Controller
{
    public function filmeshome() {
        return redirect('/filmes/1');
    }

    public function filmes($page) {
        $response = Http::withHeaders([
            'X-RapidAPI-Key' => 'a5594abcb1mshb19cb58eb86a317p13c476jsn0ac73bea1460',
            'X-RapidAPI-Host' => 'moviesdatabase.p.rapidapi.com',
        ])->get('https://moviesdatabase.p.rapidapi.com/titles?sort=year.decr&page='.$page);
        
        $body = $response->json();
        $results = $body['results'];
        return view('filmes', ['results' => $results], ['page' => $page]);
    }
}

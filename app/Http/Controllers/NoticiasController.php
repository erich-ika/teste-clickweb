<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Noticias;

class NoticiasController extends Controller
{
    public function index() {
        return view('todasnoticias', ['noticias' => Noticias::all()]);
    }

    public function noticia($id) {
        return view('noticia', ['noticia' => Noticias::find($id)]);
    }
}

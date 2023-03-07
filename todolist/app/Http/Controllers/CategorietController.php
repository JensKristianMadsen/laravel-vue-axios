<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategorietController extends Controller
{
    public function category()
    {
        return Category::orderBy('id', 'desc')->get();
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Http\Resources\BookResource;

class BookController extends Controller
{
    public function index() {
    $books = Book::get();
    return BookResource::collection($books);
    }

    public function store(StoreBookRequest $request) {
        Book::create($request->validated());
        $books = Book::get();
        return BookResource::collection($books);
    }
}

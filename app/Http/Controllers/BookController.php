<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Models\Book;
use App\Http\Resources\BookResource;
use Illuminate\Http\Exceptions\HttpResponseException;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::all();
        return BookResource::collection($books);
    }

    public function show(Book $book)
    {
        return BookResource::collection($book);
    }

    public function store(StoreBookRequest $request)
    {
        Book::create($request->validated());

        $books = Book::all();
        return BookResource::collection($books);
    }

    public function update(StoreBookRequest $request, Book $book)
    {
        $book->update($request->validated());

        $books = Book::all();
        return BookResource::collection($books);
    }

    public function destroy(Book $book)
    {
        if ($book->reviews()->exists()) {
            throw new HttpResponseException(response()->json([
                'message' => 'Boek kan niet worden verwijderd omdat er nog reviews aan gekoppeld zijn.'
            ], 422));
        }
        $book->delete();
    }
}

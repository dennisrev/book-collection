<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuthorRequest;
use App\Http\Requests\StoreBookRequest;
use App\Http\Resources\AuthorResource;
use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = Author::all();
        return AuthorResource::collection($authors);
    }

    public function store(StoreAuthorRequest $request)
    {
        Author::create($request->validated());

        $authors = Author::all();
        return AuthorResource::collection($authors);
    }

    public function update(StoreAuthorRequest $request, Author $author)
    {
        $author->update($request->validated());

        $authors = Author::all();
        return AuthorResource::collection($authors);
    }

    public function destroy(Author $author)
    {
        if ($author->books()->exists()) {
            return response()->json(['message' => 'Kan auteur niet verwijderen omdat deze nog boeken heeft'], 422);
        }

        $author->delete();
        return response()->json(['message' => 'Auteur is verwijderd']);
    }
}

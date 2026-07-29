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

    public function update(StoreBookRequest $request, Author $author)
    {
        $author->update($request->validated());

        $authors = Author::all();
        return AuthorResource::collection($authors);
    }
}

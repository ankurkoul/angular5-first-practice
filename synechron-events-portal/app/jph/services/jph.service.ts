import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { inject } from "@angular/core/src/render3/instructions";

import { Post } from '../models/post';
import { Observable } from 'rxjs';
@Injectable()
export class JphService {
    constructor( @Inject(HttpClient) private _http: HttpClient) {

    }
    getAllPosts(): Observable<Post[]> {
        return this._http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
    }




}
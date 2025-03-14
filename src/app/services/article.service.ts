import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'https://tp1webmaster-backend.onrender.com/articles';
  constructor(private http: HttpClient) { }

  getArticles(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  addArticle(article: any): Observable<any>{
    return this.http.post(this.apiUrl, article);
  }

  updateArticle(id: string, article:any): Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`, article);
  }

  deleteArticle(id: string): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

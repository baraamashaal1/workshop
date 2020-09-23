import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Articles, PressReleases} from '../interfaces/pressReleases.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor(private http: HttpClient) {
  }

  getPressReleases(): Observable<PressReleases> {
    return this.http.get<PressReleases>('/assets/newsapi.json');
  }

  getArticleDetailsByID(id: number): Observable<Articles | undefined> {
    // return this.http.get<Articles>('/assets/newsapi.json').pipe(find((article: Articles) => article.id === id));
    return this.getPressReleases().pipe(map(releases => releases.articles.find(article => article.id === id)));
  }
}

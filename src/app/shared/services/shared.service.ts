import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PressReleases} from '../interfaces/pressReleases.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor(private http: HttpClient) {
  }

  getPressReleases(): Observable<PressReleases> {
    return this.http.get<PressReleases>('/assets/newsapi.json');
  }
}

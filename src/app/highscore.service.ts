import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

export interface Score {
  name: string;
  score: number;
  id?: string;
}

@Injectable({
  providedIn: 'root',
})
export class HighscoreService {
  private readonly URL = 'http://localhost:3000/scores';
  private scoresUpdated = new Subject<void>();

  constructor(private _http: HttpClient) {}

  public load(): Observable<Score[]> {
    return this._http.get<Score[]>(this.URL);
  }

  public save(score: Score): Observable<Score> {
    return this._http.post<Score>(this.URL, score).pipe(
      tap(() => {
        this.scoresUpdated.next();
      })
    );
  }

  public getScoresUpdatedListener(): Observable<void> {
    return this.scoresUpdated.asObservable();
  }
}

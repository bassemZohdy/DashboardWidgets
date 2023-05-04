import { Dashboard } from './../models/dashboard.model';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private URL = '../assets/main-dashboard.json';
  private readonly dashboard$: BehaviorSubject<Dashboard> =
    new BehaviorSubject<Dashboard>(<Dashboard>{});
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  public fetchDashboard() {
    this.http
      .get<Dashboard>(this.URL)
      .pipe(
        tap((_) => this.log('fetched Dashboard')),
        catchError(this.handleError<Dashboard>('getDashboard', new Dashboard({})))
      )
      .subscribe((receivedItems) => this.dashboard$.next(receivedItems));
  }

  get dashboard(): Observable<Dashboard> {
    return this.dashboard$.asObservable();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}

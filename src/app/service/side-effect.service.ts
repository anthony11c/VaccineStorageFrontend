import { SideEffect } from './../side-effect/sideEffect';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from 'rxjs';
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SideEffectService {

  private sideEffectUrl = 'http://localhost:8080/sideEffects';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  getSideEffectsByVaccineResearchName(vaccineResearchName : String): Observable<SideEffect[]> {
    const url = `${this.sideEffectUrl}/${vaccineResearchName}`;
    return this.http.get<SideEffect[]>(url).pipe(
      tap(
        _ => console.log('dohvaćeni sideEffect')),
      catchError(this.handleError<SideEffect[]>('getSideEffectByVaccineResearchName'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    }
  }
}

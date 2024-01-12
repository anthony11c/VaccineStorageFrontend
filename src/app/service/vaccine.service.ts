import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Vaccine } from '../vaccine/vaccine';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  private vaccinesUrl = 'http://localhost:8080/vaccines';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  getVaccines(): Observable<Vaccine[]> {
    return this.http.get<Vaccine[]>(this.vaccinesUrl + '/')
      .pipe(
        tap(
          _ => console.log('dohvaćena cjepiva')),
        catchError(this.handleError<Vaccine[]>('getVaccines', []))
      );
  }

  getVaccineByManufacturerCompany(manufacturer : String): Observable<Vaccine> {
    const url = `${this.vaccinesUrl}/${manufacturer}`;
    return this.http.get<Vaccine>(url);
  }

  deleteVaccine(vaccine: Vaccine | string): Observable<Vaccine>{
    const researchVaccineName = typeof vaccine === 'string' ? vaccine : vaccine.researchVaccineName;
    const url = `${this.vaccinesUrl}/${researchVaccineName}`;

    return this.http.delete<Vaccine>(url, this.httpOptions).pipe(
      tap(_ => console.log(`obrisano cjepivo ime=${researchVaccineName}`)),
      catchError(this.handleError<Vaccine>('obisiCjepivo'))
    );
  }
  addVaccine(vaccine: Vaccine): Observable<Vaccine>{
    return this.http.post<Vaccine>(this.vaccinesUrl, vaccine, this.httpOptions).pipe(
      tap((newVaccine: Vaccine) => console.log(`dodano novo cjepivo w/ rsrchName= ${newVaccine.researchVaccineName}`)),
      catchError(this.handleError<Vaccine>('addVaccine'))
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

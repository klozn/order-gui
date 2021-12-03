import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, Observable, of} from "rxjs";
import {Customer} from "./customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly customerUrl: string;
  httpOptions = {
    headers: new HttpHeaders( { 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) {
    this.customerUrl = `${environment.backendUrl}/customers`;
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl)
      .pipe(
        catchError(this.handleError('getCustomers', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} : ${error}`);
      return of(result as T);
    }
  }

  private log(message: string): void {
    console.log(`CustomerService: ${message}`);
  }
}

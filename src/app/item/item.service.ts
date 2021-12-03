import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, Observable, of} from "rxjs";
import {Item} from "./item";
import {CreateItem} from "./createItem";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly itemUrl: string;
  httpOptions = {
    headers: new HttpHeaders( { 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) {
    this.itemUrl = `${environment.backendUrl}/items`;
  }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemUrl).pipe(
      catchError(this.handleError('getItems', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} : ${error}`);
      return of(result as T);
    }
  }

  private log(message: string): void {
    console.log(`ItemService: ${message}`);
  }

  addItem(item: CreateItem): Observable<Item> {
    return this.http.post<Item>(this.itemUrl, item, this.httpOptions)
      .pipe(
        catchError(this.handleError<Item>('addItem'))
      );
  }

  getItemById(id: string): Observable<Item> {
    return this.http.get<Item>(`${this.itemUrl}/${id}`)
      .pipe(
        catchError(this.handleError<Item>('getItemById'))
      );
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.itemUrl}/${item.id}`, item, this.httpOptions)
      .pipe(
        catchError(this.handleError<Item>('updateItem'))
      );
  }
}

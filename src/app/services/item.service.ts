import { Injectable } from '@angular/core';
import {Item} from '../dtos/item';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }


  saveItem(items: Item): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8080/pos/item', items);
  }

  getAllItems(): Observable<Array<Item>> {
    return this.http.get<Array<Item>>('http://localhost:8080/pos/item');
  }

  deleteItem(code: string): Observable<boolean> {
    return this.http.delete<boolean>( 'http://localhost:8080/pos/item' + '/' + code);

  }

  searchItem(code: string): Observable<Item> {
    return this.http.get<Item>( 'http://localhost:8080/pos/item' + '/' + code);
  }

  getTotalItems(): Observable<number> {
    return this.http.get<number>('http://localhost:8080/pos/item'  + '/count');
  }
}

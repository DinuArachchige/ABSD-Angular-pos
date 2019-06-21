import { Injectable } from '@angular/core';
import {Item} from '../dtos/item';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Customer} from '../dtos/customer';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  readonly baseUrl = environment.apiUrl + '/item';

  constructor(private http: HttpClient) { }


  saveItem(items: Item): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl , items);
  }

  getAllItems(): Observable<Array<Item>> {
    return this.http.get<Array<Item>>(this.baseUrl);
  }

  deleteItem(code: string): Observable<boolean> {
    return this.http.delete<boolean>('http://localhost:8080/pos/item?code' + '=' + code);
  }

  searchItem(code: string): Observable<Item> {
    return this.http.get<Item>('http://localhost:8080/pos/item?code' + '=' + code);
  }
}

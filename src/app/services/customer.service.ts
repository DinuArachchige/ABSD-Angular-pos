import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../dtos/customer';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly baseUrl = environment.apiUrl + '/customer';


  constructor(private http: HttpClient) {
  }


  saveCustomer(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl , customer);
  }

  getAllCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(this.baseUrl);
  }

  searchCustomer(id: string): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:8080/pos/customer?id' + '=' + id);

  }

  deleteCustomer(id: string): Observable<boolean> {
    return this.http.delete<boolean>('http://localhost:8080/pos/customer?id' + '=' + id);
  }

  // updateCustomer(customer: Customer) {
  // }
}

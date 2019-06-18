import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../dtos/customer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }


  // saveCustomer(customer: Customer): Observable<boolean> {
  //   return this.http.post<boolean>('http://localhost:8080/customer', customer);
  //
  // }

  getAllCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>('http://localhost:8080/customer');
  }

  // searchCustomer(id: string): Observable<Customer> {
  //   return this.http.get('http://localhost:8080/customer' + '/' + id);
  // }


  // deleteCustomer(id: string): Observable<boolean> {
  //   return this.http.delete<boolean>('http://localhost:8080/customer' + '/' + id);
  // }
  saveCustomer(selectedCustomer: Customer) {
  }

  deleteCustomer(id: any) {
  }

  searchCustomer(id: string) {
  }
}

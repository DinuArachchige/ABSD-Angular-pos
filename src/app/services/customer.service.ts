import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../dtos/customer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }


  saveCustomer(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8080/customer');

  }

  getAllCustomers() {
  }

  searchCustomer(id: string) {
  }

  deleteCustomer(id: any) {
  }
}

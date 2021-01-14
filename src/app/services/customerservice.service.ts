import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../types/Customer';

const URL = 'https://ancient-reef-45425.herokuapp.com/api';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  fetchAll(): Promise<Customer[]>{
    return this.httpClient.get<Customer[]>(URL).toPromise();
  }

  create(customer: Customer): Promise<any>{
    return this.httpClient.post(URL, customer).toPromise();
  }

  delete(_id: string): Promise<any>{
    return this.httpClient.delete(URL+`/${_id}`).toPromise();
  }

  fetchOneCustomer(id: string): Promise<Customer>{
    return this.httpClient.get<Customer>(URL+`/${id}`).toPromise();
  }

  updateCustomer(id: string, customer: Customer): Promise<any>{
    return this.httpClient.patch(URL + `/${id}`, customer).toPromise()
  }
}

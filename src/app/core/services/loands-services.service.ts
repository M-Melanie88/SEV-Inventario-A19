import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsumableType } from '../../models/consumable-type.model';

@Injectable({
  providedIn: 'root'
})
export class LoandsServicesService {

  private apiUrl = 'http://127.0.0.1:8000/api/loans'; 

  constructor(private http: HttpClient) {}

  //  GET 
  getAll(): Observable<ConsumableType[]> {
    return this.http.get<ConsumableType[]>(this.apiUrl);
  }

  // GET 
  getById(id: number): Observable<ConsumableType> {
    return this.http.get<ConsumableType>(`${this.apiUrl}/${id}`);
  }

  //  POST 
  create(data: ConsumableType): Observable<ConsumableType> {
    return this.http.post<ConsumableType>(this.apiUrl, data);
  }

  //  PUT 
  update(id: number, data: ConsumableType): Observable<ConsumableType> {
    return this.http.put<ConsumableType>(`${this.apiUrl}/${id}`, data);
  }

  // DELETE 
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

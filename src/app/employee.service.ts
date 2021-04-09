import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private Api = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.Api}/employee/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.Api}/employee/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.Api}/employee/update`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete<any>(`${this.Api}/employee/delete/${employeeId}`);
  }
}

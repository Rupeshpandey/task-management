import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'https://localhost:7210/api/Task/Create'; // Update with your API URL

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Task`);
  }

  createTask(task: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Task/Create`, task);
  }
}

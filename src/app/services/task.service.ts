import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'https://localhost:7210/api/Task'; // Update with your API URL

  constructor(private http: HttpClient) {}

  createTask(task: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Create`, task);
  }

  assignWorkflow(taskId: number, workflowId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/AssignWorkflow`, { taskId, workflowId });
  }

  completeChecklistStep(checklistId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/CompleteChecklistStep?checklistId=${checklistId}`, null);
  }

  sendNotification(taskId: number, userId: number, message: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/SendNotification`, { taskId, userId, message });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080'; // Your backend URL

  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<any[]>(`${this.baseUrl}/students`);
  }

  // Implement methods to add, update, and delete students
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080'; // Your backend URL

  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<any[]>(`${this.baseUrl}/students`);
  }

  createStudent(student: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/students`, student);
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/students/${id}`);
  }

  // Implement methods to add, update, and delete students
}

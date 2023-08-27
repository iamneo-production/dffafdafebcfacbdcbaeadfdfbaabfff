import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { Student } from 'src/models/student.model';

describe('AdminService Integration Tests', () => {
  let service: StudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [StudentService]
    });
    service = TestBed.inject(StudentService);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;

  });

  // afterEach(() => {
  //   const httpMock = TestBed.inject(HttpTestingController);
  //   httpMock.verify(); // Verify that there are no open requests after each test
  // });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should retrieve teams from the backend', (done: DoneFn) => {
    service.getStudents().subscribe(
      (students: Student[]) => {
        console.log(students)
        expect(students.length).toBeGreaterThan(0); // Check if any teams are retrieved
        done();
      },
      (error: any) => {
        fail('Failed to retrieve teams: ' + JSON.stringify(error));
      }
    );
  });

  fit('should create a new team via the backend', (done: DoneFn) => {
    const newStudent: Student = {
      name: 'demo',
      department: 'demo',
      phonenumber: "7894561230"
    };

    service.createStudent(newStudent).subscribe(
      (createdTeam: Student) => {
console.log(createdTeam);
        expect(createdTeam).toEqual(newStudent);
        done();
      },
      (error: any) => {
        fail('Failed to create team: ' + JSON.stringify(error));
      }
    );
  });

  fit('should retrieve players from the backend', (done: DoneFn) => {
    service.getStudentById(1).subscribe(
      (players: Student[]) => {
        console.log(players)
        expect(players.length).toBeGreaterThan(0); // Check if any teams are retrieved
        done();
      },
      (error: any) => {
        fail('Failed to retrieve teams: ' + JSON.stringify(error));
      }
    );
  });



  // Write similar test cases for other methods (updateTeam, deleteTeam, getPlayers, createPlayer, updatePlayer, deletePlayer)

});

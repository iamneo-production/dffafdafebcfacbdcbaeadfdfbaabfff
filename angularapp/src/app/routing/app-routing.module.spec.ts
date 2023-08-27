import { ComponentFixture, TestBed, async, inject, TestBedStatic } from "@angular/core/testing";
import { Router } from "@angular/router";

import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "../app.component";
import { Location } from "@angular/common";
// import { } from "./navbar/navbar.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NavbarComponent } from "../navbar/navbar.component";
import { StudentListComponent } from "../student-list/student-list.component";
import { StudentAddComponent } from "../student-add/student-add.component";
import { StudentDetailsComponent } from "../student-details/student-details.component";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";

describe("App Routing",() => {
    let router: Router;
    let fixture: ComponentFixture<AppComponent>;
    let location: Location

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(
                [
                  { path: '', component: StudentListComponent },
                  { path: 'add', component: StudentAddComponent },
                  { path: 'details/:id', component: StudentDetailsComponent },
                  // { path: '**', redirectTo: '/error', pathMatch: 'full' },
                ]), HttpClientTestingModule,ReactiveFormsModule
            ],
            declarations:[
                NavbarComponent,
                AppComponent,
                StudentAddComponent,
                StudentDetailsComponent,
                StudentListComponent,
            ]

        }).compileComponents();
    }));

    beforeEach(() => {
        router=TestBed.get(Router);
        location = TestBed.get(Location);
        router.initialNavigation();
        fixture = TestBed.createComponent(AppComponent)
    });

    // it('should navigate to home page by default', waitForAsync(()=>{
    //     fixture.detectChanges();
    //     fixture.whenStable().then(() => {
    //         expect(location.path()).toBe('/')
    //     })
    // }))

    fit('Week5_Day1_should route to Student-List by default', async () => {
      await router.initialNavigation();
      expect(location.path()).toBe('/');
    });

    fit('Week5_Day1_should route to admin page', async () => {
      await router.navigate(['/add']);
      expect(location.path()).toBe('/add');
    });

    fit('Week5_Day2_should route to organizer page', async () => {
      await router.navigate(['/details/:id']);
      expect(location.path()).toBe('/details/:id');
    });


})

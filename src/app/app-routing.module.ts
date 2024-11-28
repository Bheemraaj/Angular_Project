import { createEnvironmentInjector, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { StoreComponent } from './store/store.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { PrinterestComponent } from './printerest/printerest.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { CreateStudentIdComponent } from './create-student-id/create-student-id.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentComponent } from './student/student.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:'dashboard',canActivate:[AuthenticationGuard],component:DashboardComponent,children:[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'databinding',component:DatabindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'registration',component:RegistrationComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'store',component:StoreComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'account',component:AccountComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'mail',component:MailComponent},
    {path:'printerest',component:PrinterestComponent},
    {path:'weather',component:WeatherComponent},
    {path:'create_vehicle',component:CreateVehicleComponent},
    {path:'create_account',component:CreateAccountComponent},
    {path:'student_id',component:StudentIdComponent},
    {path:'create-student_id',component:CreateStudentIdComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'student',component:StudentComponent}
    
    ]},
    {path:'login',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

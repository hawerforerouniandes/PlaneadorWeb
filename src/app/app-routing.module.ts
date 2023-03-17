import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './pages/class/class.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path:  '', component:LoginComponent},
  {path:  'home', component:HomeComponent},
  {path:  'users', component:UsersComponent},
  {path:  'courses', component:CoursesComponent},
  {path:  'class', component:ClassComponent},
  {path:  'settings', component:SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

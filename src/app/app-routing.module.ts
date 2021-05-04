import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';


const ROUTES : Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'todos', component:ToDoComponent},
  {path: 'not-found', component:NotFoundComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'users', component:UsersComponent},
  {path: 'add-user', component:AddUserComponent},
  {path: 'add-todo', component:AddTodoComponent},
  {path: 'single-todo/:id', component:SingleTodoComponent},
  {path: '', component:HomeComponent},
  {path: '**', pathMatch:'full', redirectTo:'not-found'},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

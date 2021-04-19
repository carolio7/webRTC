import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { error } from "selenium-webdriver";
import { TodoService } from "../services/todo.service";


@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class ToDoComponent implements OnInit, OnDestroy{
  today;
  todos;
  todosSub: Subscription;

  constructor(private todoService: TodoService,
    private router: Router){

  }

  ngOnInit(){
    this.today = this.todoService.today;
    this.todosSub = this.todoService.todoSubject.subscribe(
      (value: any[]) => {
        this.todos = value;
      },
      (error) => {
        console.log('Erreur : '+ error);
      },
      () => {
        console.log("Observable completée ")
      }
    );
    this.todoService.emitTodos();
  }

  onChangeStatus(i: number){
    this.todoService.onChangeStatus(i);
  }

  onChangeIsModif(i){
    this.todoService.onChangeIsModif(i);
  }


  onView(id: number){
    this.router.navigate(["single-todo",id]);
  }


  ngOnDestroy() {
    this.todosSub.unsubscribe();
  }

}

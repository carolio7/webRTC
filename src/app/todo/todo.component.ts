import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TodoService } from "../services/todo.service";


@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class ToDoComponent implements OnInit{
  today;
  todos;

  constructor(private todoService: TodoService,
    private router: Router){

  }

  ngOnInit(){
    this.today = this.todoService.today;
    this.todoService.todos
      .then((todosRecup) => {
        this.todos = todosRecup;
      })
      .catch((error) => {
        console.log("Erreur : " + error );
      });
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

}

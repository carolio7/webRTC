import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class TodoService{
  today = new Date();
  todos;
  todoSubject = new Subject<any[]>();


  constructor(){

    setTimeout(() =>{
      this.todos = [
        {
          todoName: "Projet 1",
          todoStatus: false,
          image: "http://placeimg.com/300/300/tech",
          isModif: false,
          description: "Ceci est le projet 1",
        },
        {
          todoName: "Projet 2",
          todoStatus: false,
          image: "http://placeimg.com/300/300/tech",
          isModif: false,
          description: "Ceci est le projet 2",
        },
        {
          todoName: "Projet 3",
          todoStatus: true,
          image: "http://placeimg.com/300/300/tech",
          isModif: false,
          description: "Ceci est le projet 3",
        },
        {
          todoName: "Projet 4",
          todoStatus: false,
          image: "http://placeimg.com/300/300/tech",
          isModif: false,
          description: "Ceci est le projet 4",
        }
      ];
      this.emitTodos();
    },3000);

  }

  emitTodos(){
    this.todoSubject.next(this.todos);
  }

  onChangeStatus(i: number){
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
    this.emitTodos();
  }

  onChangeIsModif(i){
    this.todos[i].isModif = !this.todos[i].isModif;
    this.emitTodos();
  }

  getTodo(index: number){
    if (this.todos[index]){
      return this.todos[index]
    }
    return false
  }
}

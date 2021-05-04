import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { error } from "selenium-webdriver";
import { Todo } from "../models/todo.model";

@Injectable()
export class TodoService{
  today = new Date();
  todos: Todo[];
  todoSubject = new Subject<any[]>();


  constructor(private httpClient: HttpClient){
    this.getTodosFromServer();
  }

  emitTodos(){
    this.todoSubject.next(this.todos);
  }

  onChangeStatus(i: number){
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
    this.emitTodos();
    this.saveTodosFromServer();
  }

  onChangeIsModif(i){
    this.todos[i].isModif = !this.todos[i].isModif;
    this.emitTodos();
    this.saveTodosFromServer();
  }

  getTodo(index: number){
    if (this.todos[index]){
      return this.todos[index]
    }
    return false
  }


  addTodo(todo: Todo): void {
    this.todos.unshift(todo);
    this.emitTodos();
    this.saveTodosFromServer();
  }


  saveTodosFromServer(): void {
    this.httpClient.put("https://todo-list-app-26ad4-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
     this.todos).subscribe(
       () => {
         console.log("Données enregistrée avec succès");
       },
       (error) => {
         console.log("Erreur de sauvegarde : " + error);
       }
     )
  }


  getTodosFromServer(): void {
    this.httpClient.get<Todo[]>("https://todo-list-app-26ad4-default-rtdb.europe-west1.firebasedatabase.app/todos.json")
      .subscribe(
        (todoRecup: Todo[]) => {
          this.todos = todoRecup;
          this.emitTodos();
        },
        (error) => {
          console.log("Erreur de récupération des données : " + error);
        },
        () => {
          console.log("Récupération des données terminée");

        }
      );
  }

}

import { Injectable } from "@angular/core";

@Injectable()
export class TodoService{
  today = new Date();
  todos;
  todoSlice;


  constructor(){

    this.todos = new Promise((resolve, reject) =>{
      const data = [
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
      if (data.length){
        setTimeout(() => {
          this.todoSlice = data;
          resolve(data);
        }, 5000);
      } else{
        reject("Pas de données disponible sur le serveur")
      }
    });
    /*setTimeout(() =>{
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

    },3000);
    */
  }

  onChangeStatus(i: number){
    this.todoSlice[i].todoStatus = !this.todoSlice[i].todoStatus;
  }

  onChangeIsModif(i){
    this.todoSlice[i].isModif = !this.todoSlice[i].isModif;
  }

  getTodo(index: number){
    if (this.todoSlice[index]){
      return this.todoSlice[index]
    }
    return false
  }
}

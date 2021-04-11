import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {

  todo;
  error;
  constructor(private route: ActivatedRoute,
              private todoService: TodoService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.todo = this.todoService.getTodo(id);
    if (!this.todo){
      this.error = "Id incorrect"
    }
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;
  desc: string;
  taskDate: string;
  priority: string; 
  status: string = 'to-do'; // Initialize the status property with 'to-do'

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true,
      taskDate: this.taskDate,
      priority: this.priority,
      status: this.status // Ensure the status is passed correctly
    }

    this.todoAdd.emit(todo);
  }

}

import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localItem: string;
  statusFilter: string = '';
  priorityFilter: string = '';
  sortType: string = 'asc'; // Default sorting type is ascending

  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  // Toggle the sorting type between ascending and descending
  toggleSortType() {
    this.sortType = this.sortType === 'asc' ? 'desc' : 'asc';
  }

  // Filter and Sort the todos based on status, priority, and date
  get filteredTodos(): Todo[] {
    let filteredTodos = this.todos;

    if (this.statusFilter) {
      filteredTodos = filteredTodos.filter(todo => todo.status === this.statusFilter);
    }

    if (this.priorityFilter) {
      filteredTodos = filteredTodos.filter(todo => todo.priority === this.priorityFilter);
    }

    // Sort the todos by taskDate based on the sortType
    filteredTodos.sort((a, b) => {
      if (this.sortType === 'asc') {
        return new Date(a.taskDate).getTime() - new Date(b.taskDate).getTime();
      } else {
        return new Date(b.taskDate).getTime() - new Date(a.taskDate).getTime();
      }
    });

    return filteredTodos;
  }

  exportToCSV() {
    const csvData = Papa.unparse(this.filteredTodos, {
      header: true, // Include header row in the CSV
    });
  
    // Create a Blob object and set the type to 'text/csv'
    const blob = new Blob([csvData], { type: 'text/csv' });
  
    // Create a download link for the Blob
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'todos.csv';
    document.body.appendChild(a);
    a.click();
  
    // Cleanup: Revoke the URL and remove the link
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  getTodos(): Todo[] {
    return this.todos;
  }
  
}

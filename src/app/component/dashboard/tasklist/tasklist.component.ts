import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/shared/todo/todo.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  constructor(private todoService: TodoService) {}
  
  ngOnInit(): void {
  
  }

  onClick(taskInput: HTMLInputElement) {
    if(taskInput.value) {
      this.todoService.addTask(taskInput.value);
      taskInput.value =''
    }
  }
}

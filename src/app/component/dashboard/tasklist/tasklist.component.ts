import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/shared/todo/todo.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  tasks: any[] = [];

  constructor(private todoService: TodoService) {}
  
  ngOnInit(): void {
    this.todoService.firestoreCollection.valueChanges({ idField: 'id' })
      .subscribe(task => {
        this.tasks = task.sort((a:any,b:any) =>  
        {return a.isDone -b.isDone} );
    })
  }

  onClick(taskInput: HTMLInputElement) {
    if(taskInput.value) {
      this.todoService.addTask(taskInput.value);
      taskInput.value ='';
    }
  }

  onStatusChange(id:string, newStatus: boolean) {
    this.todoService.updateToDoStatus(id, newStatus);
  }

  onDelete(id:string) {
    this.todoService.deleteTask(id);
  }
}

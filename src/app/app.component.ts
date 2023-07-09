import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ToDo made with Angular';

  delete: string = 'https://img.icons8.com/material-rounded/20/filled-trash.png'
  done: string = 'https://img.icons8.com/ios-filled/20/checkmark--v1.png'

  tasks: Task[] = [
    new Task('TEST 6'),
    new Task('TEST 5'),
    new Task('TEST 4'),
    new Task('TEST 3'),
    new Task('TEST 2'),
    new Task('TEST 1')
  ]

  add(newTask: string): void {
    const existingTask = this.tasks.find(task => task.title === newTask);

    if (existingTask) {
      this.tasks.unshift(new Task('Ta naloga že obstaja'));
      setTimeout(() => {
        this.tasks.shift();
      }, 2000);
    } else {
      this.tasks.unshift(new Task(newTask));
    }
  }

  remove(existingTask: Task): void {
    let userConfirmed: boolean = confirm(`Are you sure you want to remove the following task? \n "${existingTask.title}"`)

    if (userConfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask)
    }

  }

  marksAsDone(task: Task): void {
    alert('The task: "' + task.title + '" is done!')
    task.isDone = true;
  }

}

class Task {

  constructor(public title: string) {
  }

  public isDone = false;
}

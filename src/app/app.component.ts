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

  tasks: string[] = [
    'TEST 1',
    'TEST 2',
    'TEST 3',
    'TEST 4',
    'TEST 5',
    'TEST 6'
  ]

  add(newTask: string): void {
    if (this.tasks.includes(newTask)) {
      this.tasks.unshift('Ta naloga že obstaja')
      setTimeout(() => {
        this.tasks.shift()
      }, 2000)
    } else {
      this.tasks.unshift(newTask)
    }
  }

  remove(existingTask: string): void {
    let userConfirmed: boolean = confirm(`Are you sure you want to remove the following task? \n "${existingTask}"`)

    if (userConfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask)
    }

  }

  marksAsDone(task: string): void {
    alert('The task: "' + task + '" is done!')
  }

}

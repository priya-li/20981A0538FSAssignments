import { Component } from '@angular/core';

@Component({
  selector: 'app-chores-list',
  templateUrl: './chores-list.component.html',
  styleUrl: './chores-list.component.css'
})
export class ChoresListComponent {
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
  constructor() { }

}

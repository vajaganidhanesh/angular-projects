import { Component } from '@angular/core';
import { MyInterface } from './contracts/item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'todo';

  // filter: 'all' | 'active' | 'done' = 'all';

  // allItems = [
  //   { description: 'eat', done: true },
  //   { description: 'sleep', done: false },
  //   { description: 'play', done: false },
  //   { description: 'laugh', done: false },
  // ];

  // get items() {
  //   if (this.filter === 'all') {
  //     return this.allItems;
  //   }
  //   return this.allItems.filter((item) =>
  //     this.filter === 'done' ? item.done : item.description
  //   );
  // }

  // addItem(description: any) {
  //   this.allItems.unshift({
  //     description: description.User,
  //     done: description.bool,
  //   });
  //   console.log(description);
  // }

  public myData: MyInterface[] = [
    {
      name: 'Skill-1',
      values: [{ pvalue1: 1, pvalue2: 2, pvalue3: 3 }],
    },
    {
      name: 'Skill-2',
      values: [{ pvalue1: 1, pvalue2: 2, pvalue3: 3 }],
    },
  ];

  constructor() {
    console.log(this.myData);
  }
}

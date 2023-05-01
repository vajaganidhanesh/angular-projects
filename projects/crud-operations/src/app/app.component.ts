import { Component } from '@angular/core';
import { crudService } from '../services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any;

  constructor(private dataService: crudService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }
}

import { Component } from '@angular/core';
import { crudService } from '../services/crud.service';
import { ProductType } from '../contracts/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public data: ProductType[] = [];
  public view: boolean = false;

  constructor(private dataService: crudService) {}
  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    });
  }

  viewData(): void {
    if (!this.view) {
      this.view = true;
    } else {
      this.view = false;
    }
  }
}

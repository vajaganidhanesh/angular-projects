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
  selectedValue: any;

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

  handleButtonClick(event: MouseEvent) {
    console.log('Button clicked');
    event.stopPropagation(); // Stop propagation here
  }

  handleChildData(value: any): void {
    this.selectedValue = value;
    this.viewData();
  }
}

import { Component } from '@angular/core';
import { crudService } from '../services/crud.service';
import { ProductType } from '../contracts/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public data!: ProductType[];
  public view: boolean = false;
  updateView: boolean = false;
  public selectedValue: any;
  public updateValue: any;
  public formData: any = {
    id: 0,
    name: '',
    weight: '',
    symbol: '',
  };

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
  viewUpdate(): void {
    if (!this.updateView) {
      this.updateView = true;
    } else {
      this.updateView = false;
    }
  }

  handleButtonClick(event: MouseEvent) {
    console.log('Button clicked');
    event.stopPropagation(); // Stop propagation here
    console.log('stop propagation');
  }
  handleUpdateData(value: any) {
    this.updateValue = value;
    this.viewUpdate();
  }
  handleChildData(value: any): void {
    this.selectedValue = value;
    this.viewData();
  }

  addData() {
    this.dataService.addItem(this.formData).subscribe((data) => {
      console.log(data);
      this.data.push(data);
    });
  }

  deleteItem(id: number) {
    this.dataService.delete(id).subscribe((data) => {
      console.log(data);
      this.data = this.data.filter((product) => product.id !== id);
    });
  }

  handleDataUpdate(data: any) {
    this.dataService.update(data).subscribe((data) => {
      const index = this.data.findIndex((obj) => obj.id === data.id);
      this.data[index] = data;
    });
  }
}

import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ProductType } from 'projects/crud-operations/src/contracts/product';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css'],
})
export class NewItemComponent {
  @Input() element: any;
  id!: number;
  name!: string;
  weight!: number;
  symbol!: string;

  @Output() dataEvent = new EventEmitter<any>();

  ngOnInit() {
    this.id = this.element.id;
    this.name = this.element.name;
    this.weight = this.element.weight;
    this.symbol = this.element.symbol;
  }

  handleUpdateData() {
    let updateData: ProductType = {
      id: this.id,
      name: this.name,
      weight: this.weight,
      symbol: this.symbol,
    };

    this.dataEvent.emit(updateData);
  }
}

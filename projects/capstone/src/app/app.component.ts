import { Component, OnInit } from '@angular/core';
import { crudOperation } from '../services/crudoperations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public ProductData: any = [];
  public loader: boolean = false;
  constructor(private crud: crudOperation) {}
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.crud.GetMethod().subscribe((data) => {
      console.log(data);
      this.ProductData = data;
    });
  }

  delete(id: number): void {
    this.loader = true;
    this.crud.deleteMethod(id).subscribe(
      (data) => {
        this.ProductData = this.ProductData.filter(
          (product: { id: number }) => product.id !== id
        );
        this.loader = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

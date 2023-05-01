import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productData } from 'projects/capstone/src/contract/data';
import { crudOperation } from 'projects/capstone/src/services/crudoperations.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  public product: productData = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    rating: { rate: 0, count: 0 },
    image: '',
    category: '',
  };
  public id: any = '';

  constructor(private route: ActivatedRoute, private data: crudOperation) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.data.GetProduct(this.id).subscribe((data) => {
      console.log(data);
      this.product = data;
    });
  }
}

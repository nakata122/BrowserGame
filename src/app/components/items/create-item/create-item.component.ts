import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../core/services/item/item.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  itemData = {name: '', imageUrl: '', description: ''};
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  createItem() {
    this.itemService.createItem(this.itemData);
  }
}

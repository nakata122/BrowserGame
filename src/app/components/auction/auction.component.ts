import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../core/services/item/item.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getAuctions();
  }

  bid(id) {
    this.itemService.bid(id);
  }
}

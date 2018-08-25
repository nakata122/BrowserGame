import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { ItemService } from '../../core/services/item/item.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ItemDialogComponent } from '../item-dialog/item-dialog.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private itemService: ItemService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.itemService.getAll();
  }

  ngOnInit() {
  }

  addItem() {
    this.itemService.addItem();
  }

  createItem() {
    this.router.navigate(['createItem']);
  }

  openDialog(item) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      item
    };

    const dialogRef = this.dialog.open(ItemDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.itemService.postAuction({item: item._id, price: data.price});
        }
      }
    );
  }
}

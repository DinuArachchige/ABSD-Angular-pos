import {Component, OnInit, ViewChild} from '@angular/core';
import {Item} from '../../dtos/item';
import {NgForm} from '@angular/forms';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.css']
})
export class ManageItemComponent implements OnInit {

  items: Array<Item> = [];
  selectedItems: Item = new Item('', '', '', '');
  tempItems: Item = null;
  manuallySelected = false;
  @ViewChild('frmItem') frmItem: NgForm;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.loadAllItems();
  }


  saveItems(): void {
    this.itemService.saveItem(this.selectedItems)
      .subscribe((result) => {
      if (result) {
        alert('Item has been saved successfully');
        this.items.push(this.selectedItems);
        this.loadAllItems();
      } else {
        alert('Failed to save the item');
      }
    });
  }

   loadAllItems(): void {
     this.itemService.getAllItems().subscribe(
       (result) => {
         this.items = result;
         console.log(this.items);
       }
     );
  }

  deleteItems(code): void {
    if (confirm('Are you sure you want to delete this Item?')) {

      this.itemService.deleteItem(code).subscribe(
        (result) => {
          if (result) {
            alert('Items has been Deleted successfully');
          } else {
            alert('Failed to deleted Items');
          }
          this.loadAllItems();
        }
      );
    }
  }

  update(id): void {
    this.itemService.saveItem(this.selectedItems).subscribe(
      value => {
        if (value) {
          alert('Items has been Update successfully');
          this.loadAllItems();
        } else {
          alert('Failed to update the Items');
        }
      }
    );
  }

  selectItems(item: Item): void {
    this.itemService.searchItem(item.code).subscribe(
      value => {
        if (value) {
          this.selectedItems = value;
        }
      }
    );
  }

  clear(): void {
    const index = this.items.indexOf(this.selectedItems);

    if (index !== -1) {
      this.items[index] = this.tempItems;
      this.tempItems = null;
    }
    this.selectedItems = new Item('', '', '', '');
    this.manuallySelected = false;
  }

}

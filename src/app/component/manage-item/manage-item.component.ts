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
  @ViewChild('frmItems') frmItems: NgForm;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.loadAllItems();
  }

   loadAllItems() {
    this.itemService.getAllItems().subscribe((result) => {
      this.items = result;
      console.log(this.items);
    });
  }

  selectItems(item: Item) {
    this.itemService.searchItem(item.code).subscribe((value) => {
      if (value) {
        this.selectedItems = value;
      }
    });
  }

  saveItems() {
    this.itemService.saveItem(this.selectedItems).subscribe((result) => {
      if (result) {
        alert('Item has been saved successfully');
        this.loadAllItems();
      } else {
        alert('Failed to save the item');
      }
    });
  }

  deleteItems(code) {
    if (confirm('Are you sure, you want to delete this item?'))  {
      this.itemService.deleteItem(code).subscribe((result) => {
        if (result) {
          alert('Item has been deleted successfully');
        } else {
          alert('Fail to delete Item');
        }
      });
    }
  }

  clear() {
    const index = this.items.indexOf(this.selectedItems);
    if (index !== -1) {
      this.items[index] = this.tempItems;
      this.tempItems = null;
    }
    this.selectedItems = new Item('', '', '', '');
    this.manuallySelected = false;
  }

  update(code) {
    this.itemService.saveItem(this.selectedItems).subscribe((value) => {
      if (value) {
        alert('Item has been update successfully');
        this.loadAllItems();
      } else {
        alert('failed to update item');
      }
    });
  }
}

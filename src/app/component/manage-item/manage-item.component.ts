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
  manuallySelected = true;
   inputDisabled = true;
  count = 0;
  @ViewChild('frmItem') frmItem: NgForm;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.loadAllItems();
  }


  saveItem(): void {
    this.itemService.saveItem(this.selectedItems).subscribe(
      (result) => {
        if (result) {
          alert('Item has been saved successfully');
          // this.customers.push(this.selectedCustomer);
          this.loadAllItems();
          this.clear();
          this.manuallySelected = true;
        } else {
          alert('Failed to save the item');
        }
      });

  }


  loadAllItems(): void {
     this.itemService.getAllItems().subscribe(
       (result) => {
         this.items = result;
         // console.log(this.items);
       }
     );
  }

  deleteItem(code): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.itemService.deleteItem(code).subscribe(
        (result) => {
          alert('Item has been deleted successfullyr');
          this.loadAllItems();
        }
      );
    }
  }

  searchItem(code: string): void {
    this.itemService.searchItem(code).subscribe(
      (result) => {
        console.log(result);
        this.frmItem.form.get('description').setValue(result.description);
        this.frmItem.form.get('unitPrice').setValue(result.unitPrice);
        this.frmItem.form.get('qty').setValue(result.qty);
        // this.selectedCustomer = result;
        // console.log(this.selectedCustomer);
        if (!result) {

          alert('Customer Not Found !');
          // this.clear(x);
          //  this.selectedCustomer = null;

        }
      }
    );

  }

  update(id): void {

  }

  selectItems(item: Item): void {
    this.clear();
    this.selectedItems = item;
    this.tempItems = Object.assign({}, item);
    this.manuallySelected = true;

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

  tableClick(item: Item): void {
    this.itemService.searchItem(item.code).subscribe(
      (result) => {
        this.selectedItems = result;
        //    console.log(this.selectedCustomer);

      });
  }

  updateSubmit() {

  }

}

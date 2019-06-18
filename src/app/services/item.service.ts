import { Injectable } from '@angular/core';
import {Item} from '../dtos/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getAllItems() {
  }

  saveItem(selectedItems: Item) {

  }

  deleteItem(code: any) {
  }

  searchItem(code: string) {
  }
}

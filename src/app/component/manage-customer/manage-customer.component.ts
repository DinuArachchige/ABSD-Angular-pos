import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../dtos/customer';
import {NgForm} from '@angular/forms';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {

  customers: Array<Customer> = [];
  selectedCustomer: Customer = new Customer('', '', '');
  tempCustomer: Customer = null;
  manuallySelected = true;
  inputDisabled = true;
  count = 0;
  @ViewChild('frmCustomers') frmCustomers: NgForm;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.loadAllCustomers();
  }

  saveCustomer() {
    this.customerService.saveCustomer(this.selectedCustomer).subscribe(
      (result) => {
      if (result) {
        alert('Customer has been saved successfully');
        this.loadAllCustomers();
        this.clear();
        this.manuallySelected = true;
      } else {
        alert('Failed to save the customer');
      }
    });
  }


  clear()  {
    const index = this.customers.indexOf(this.selectedCustomer);
    if (index !== -1) {
      this.customers[index] = this.tempCustomer;
      this.tempCustomer = null;
    }
    this.selectedCustomer = new Customer('', '', '');
    this.manuallySelected = false;
  }


   loadAllCustomers() {
    this.customerService.getAllCustomers().subscribe((result) => {
      this.customers = result;
    });
  }


  update(id) {
    this.customerService.saveCustomer(this.selectedCustomer).subscribe((result) => {
      if (result) {
        alert('Customer has been Updated successfully');
        this.loadAllCustomers();
        this.clear();
        this.manuallySelected = true;
      } else {
        alert('Failed to update the customer ');
      }
    });
  }

  deleteCustomer(id) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(id).subscribe(
        (result) => {
          if (result) {
            alert('Customer has been deleted successfully');
            this.loadAllCustomers();
          } else {
            alert('Failed to delete the customer');
          }
          this.loadAllCustomers();
        }
      );
    }
  }

  searchCustomer() {
    this.customerService.searchCustomer(this.selectedCustomer.id).subscribe((result) => {
      this.selectedCustomer = result;
      if (!result) {
          alert('Customer Not Found !');
        }
      });
  }

  tableClick(customer: Customer) {
    this.customerService.searchCustomer(customer.id).subscribe((result) => {
      this.selectedCustomer = result;
      });
  }

  check() {
    this.count++;
    if (this.count === 1) {
         this.manuallySelected = false;
      }
    if (this.count > 1) {
        this.manuallySelected = true;

        this.count = 0;
      }
  }

  selectCustomer(customer: Customer) {
    this.clear();
    this.selectedCustomer = customer;

  }

}

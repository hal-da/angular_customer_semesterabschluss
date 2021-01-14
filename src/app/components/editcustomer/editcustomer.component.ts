import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerserviceService } from 'src/app/services/customerservice.service';
import { Customer } from 'src/app/types/Customer';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  @Output() changedCustomer = new EventEmitter();
  value: Date;
  showEditDiv = false;
  actualCustomer: Customer;
  id: string;

  constructor(
    private customerService: CustomerserviceService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
     this.customerService.updateCustomer(this.id, f.value)
      .then(() => {
        this.changedCustomer.emit();
        this.showEditDiv = false;
      });
  }

  editCustomer(id: string): void {
    this.id = id;
      this.customerService.fetchOneCustomer(id)
      .then(customer => {
        customer.birthday = new Date(customer.birthday)
        this.actualCustomer = customer;
      })

    this.showEditDiv = true;
  }

  cancel() {
    this.showEditDiv = false;
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerserviceService } from 'src/app/services/customerservice.service';
import { Customer } from 'src/app/types/Customer';
import { CustomerlistComponent } from '../customerlist/customerlist.component';


@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  value: Date;
  @Output() ok = new EventEmitter();
  constructor(
    private customerService: CustomerserviceService
  ) { }

  ngOnInit(): void {

  }
  onSubmit(f: NgForm) {

    let customer:Customer = f.value;
    this.customerService.create(customer)
      .then(()=>this.ok.emit())
  }

  logChange() {
    console.log(this.value)
  }


}

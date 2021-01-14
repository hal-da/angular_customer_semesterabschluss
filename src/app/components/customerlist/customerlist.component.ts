import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CustomerserviceService } from 'src/app/services/customerservice.service';
import { Customer } from 'src/app/types/Customer';




@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  @Output() id = new EventEmitter();
  customerList: Customer[];
  cols: any[];

  constructor(
    private customerservice: CustomerserviceService,

  ) { }

  ngOnInit(): void {
    this.refresh();

    this.cols = [
      {field: 'firstName', header: 'First Name'},
      {field: 'lastName', header: 'Last Name'},
      {field: 'birthday', header: 'Birthday'},
      {field: 'active', header: 'Active'}
    ]
  }

  refresh(): void {
    try {
      this.customerservice.fetchAll()
      .then( customerList => this.customerList = customerList )
    } catch (error) {
      console.log(error)
    }

  }

  delete(event:Event, id: string): void {

    if (confirm('You sure?')) {
      this.customerservice.delete(id)
    .then(()=>this.refresh())
    }
  }

  edit(id: string): void{
    this.id.emit(id);
  }

}

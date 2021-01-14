import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { AddcustomerComponent } from './components/addcustomer/addcustomer.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { EditcustomerComponent } from './components/editcustomer/editcustomer.component';





@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    AddcustomerComponent,
    EditcustomerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    TableModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
		ButtonModule,
    RippleModule,
    FormsModule,
    CheckboxModule,
    CalendarModule,
    DynamicDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

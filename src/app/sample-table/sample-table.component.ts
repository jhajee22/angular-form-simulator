import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sample-table',
  imports: [CommonModule,FormsModule],
  templateUrl: './sample-table.component.html',
  styleUrl: './sample-table.component.scss'
})
export class SampleTableComponent {
  objectName: string = '';
  fields:{key:string,label:string}[]=[]
  formData:{[key:string]:any} ={}
  submittedRecords:any[]=[]

  //Dummy Configuration for object fields 
  objectConfig: { [key: string]: { key: string; label: string }[] } = {
    Contact:[
      {key:'firstName',label:'First Name :   '},
      {key:'lastName',label:'Last Name'},
      {key:'email',label:'Annual Revenue'},
    ],
  };
  loadObjectField(){
   this.fields = this.objectConfig[this.objectName] || [];
   this.formData = {} //Reset form Data 
  }
  submitForm(){
  this.submittedRecords.push({...this.formData});
  this.formData = {} //clear form data 
  }
  get fieldLabels(): string[] {
    return this.fields.map(f => f.label);
  }
  
  get fieldKeys(): string[] {
    return this.fields.map(f => f.key);
  }
  isFormValid(): boolean {
    return this.fields.every(field => {
      const value = this.formData[field.key];
      return value !== undefined && value !== null && value.toString().trim() !== '';
    });
  }
}

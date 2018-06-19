import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  list = [];
  
  form = new FormGroup ({
    label: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    priority: new FormControl()
  })

  

  options = {
    month: 'long',
    day: 'numeric',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  add(){
    let now = new Date();
    this.list.push({
      label: this.form.value.label,
      description: this.form.value.description,
      date: now.toLocaleString("ru", this.options),
      color: this.form.value.priority
    });
    this.form.reset();
 }

  remove(i){
    this.list.splice(i,1);
  }



}

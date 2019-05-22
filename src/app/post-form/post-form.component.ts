import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() onSubmitted = new EventEmitter<any>();

  constructor() { }

  submitted(form) {
    this.onSubmitted.emit(form);
  }

  ngOnInit() {
  }

}

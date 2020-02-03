import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pa-button',
  templateUrl: './pa-button.component.html',
  styleUrls: ['./pa-button.component.scss']
})
export class PaButtonComponent implements OnInit {
 @Input() text;
  constructor() { }

  ngOnInit(): void {
  }

}

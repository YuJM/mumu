import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';

const className = 'pa-button';

@Component({
  selector: 'app-pa-button',
  templateUrl: './pa-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['pa-button.component.css']
})
export class PaButtonComponent implements OnInit {
  @Input() text: string;

  constructor(private _hostElementRef: ElementRef) {

  }

  ngOnInit(): void {
    this._hostElementRef.nativeElement.classList.add(className);
  }

}

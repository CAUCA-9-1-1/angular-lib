import {Component, Input, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'cause-dialog-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.styl']
})
export class FullscreenComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;

  constructor(public dialogRef: MdDialogRef<FullscreenComponent>) { }

  ngOnInit() {
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'cause-dialog-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.styl']
})
export class ConfirmComponent implements OnInit {

  @Input() title: string;
  @Input() question: string;

  constructor(public dialogRef: MdDialogRef<ConfirmComponent>) { }

  ngOnInit() {
  }
}

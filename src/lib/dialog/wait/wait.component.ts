import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'cause-dialog-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.styl']
})
export class WaitComponent implements OnInit {
  constructor(
    public dialogRef: MdDialogRef<WaitComponent>
  ) {
  }

  ngOnInit() {
  }
}

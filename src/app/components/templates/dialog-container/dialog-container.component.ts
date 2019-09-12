import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dialog-container',
  template: `
  <div mat-dialog-title>
    <div class="row">
      <div class="col-sm-12">
        <ng-content select=".dialog-header"></ng-content>
      </div>
    </div>
  </div>
  <div class="custom-mat-disalog-content">
    <ng-content select=".dialog-body"></ng-content>
  </div>
  <mat-dialog-actions align="end">
    <div class="col-sm-12">
      <div class="row">
        <ng-content select=".dialog-footer"></ng-content>
      </div>
    </div>
  </mat-dialog-actions>
  `
})
export class DialogContainerComponent { }

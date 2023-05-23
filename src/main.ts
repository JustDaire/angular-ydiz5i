import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    // BrowserAnimationsModule,
  ],
  template: `
  <mat-toolbar color="primary">
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
  </button>
  <span>Blast</span>
  <span class="example-spacer"></span>
  <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
    <mat-icon>share</mat-icon>
  </button>
</mat-toolbar>

<h2> 
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
  <span>
    <mat-icon>expand_more</mat-icon> Needs Attention
  </span>
  </button>
</h2>

<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

  <!--- Note that these columns can be defined in any order.
        The actual rendered columns are set as a property on the row definition" -->

  <!-- Creation date -->
  <ng-container matColumnDef="create_date">
    <th mat-header-cell *matHeaderCellDef> No. </th>
    <td mat-cell *matCellDef="let row"> {{row.create_date}} </td>
  </ng-container>

  <!-- Update date -->
  <ng-container matColumnDef="update_date">
    <th mat-header-cell *matHeaderCellDef> Update date </th>
    <td mat-cell *matCellDef="let row"> {{row.update_date}} </td>
  </ng-container>

  <!-- package Column -->
  <ng-container matColumnDef="package">
    <th mat-header-cell *matHeaderCellDef> package </th>
    <td mat-cell *matCellDef="let row"> {{row.package}} </td>
  </ng-container>

  <!-- Symbol Column -->
  <ng-container matColumnDef="state">
    <th mat-header-cell *matHeaderCellDef> state </th>
    <td mat-cell *matCellDef="let row"> {{row.state}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>

<mat-accordion>
</mat-accordion>
  `,
})

export interface PeriodicElement {
  // create_date: string;
  // update_date: number;
  // package: number;
  state: State;
}

export interface State {
  id: number;
  name: string;
}

const states: State[] = [
  { id: 0, name: 'Suspended (Build Error)' },
  { id: 1, name: 'Suspended (Template Error)' },
  { id: 2, name: 'Suspended (Unsafe Changes)' },
  { id: 3, name: 'Suspended (Unresolved Comments)' },
];
  
const ELEMENT_DATA: PeriodicElement[] = [{state: states[1]}];

export class App {
  name = 'Angular';
  panelOpenState = false;

  data = [];

  displayedColumns: string[] = [
    // 'create_date',
    // 'update_date',
    // 'package',
    'state',
  ];
  
  // for (let i = 0; i < 10; i++) {
  //   console.log ("Block statement execution no." + i);
  //   console.log ("Block statement execution no." + states);
  //   ELEMENT_DATA.push({state: states[1]})
  // }
  // dataSource = ELEMENT_DATA;

  // switch(state: boolean) {
  //   state = !state;
  // }
}

bootstrapApplication(App);

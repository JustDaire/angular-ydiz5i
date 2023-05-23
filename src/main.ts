import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
  ],
  template: `
  <mat-toolbar color="primary">
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
  </button>
  <span>Blast</span>
  <span class="example-spacer"></span>
  <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
    <mat-icon>help_outline</mat-icon>
  </button>
  <button mat-icon-button class="default" aria-label="Example icon-button with share icon">
    <mat-icon>bug_report</mat-icon>
  </button>
</mat-toolbar>

<div class="container">

  <button mat-raised-button (click)="refreshData()"><mat-icon>refresh</mat-icon> Refresh</button>

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
      <th mat-header-cell *matHeaderCellDef> Create Date </th>
      <td mat-cell *matCellDef="let row"> {{row.create_date}} </td>
    </ng-container>
  
    <!-- Update date -->
    <ng-container matColumnDef="update_date">
      <th mat-header-cell *matHeaderCellDef> Update Date </th>
      <td mat-cell *matCellDef="let row"> {{row.update_date}} </td>
    </ng-container>
  
    <!-- package Column -->
    <ng-container matColumnDef="package">
      <th mat-header-cell *matHeaderCellDef> Package </th>
      <td mat-cell *matCellDef="let row"> cl/{{row.package}} </td>
    </ng-container>
  
    <!-- Symbol Column -->
    <ng-container matColumnDef="state">
      <th mat-header-cell *matHeaderCellDef> State </th>
      <td mat-cell *matCellDef="let row"> {{row.state}} </td>
    </ng-container>
  
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>

</div>

<mat-accordion>
</mat-accordion>
  `,
})

// const ELEMENT_DATA: PeriodicElement[] = [{state: states[1]}];
export class App implements OnInit {
  name = 'Angular';
  panelOpenState = false;

  data = [];

  states: State[] = [
    { id: 0, name: 'Suspended (Build Error)' },
    { id: 1, name: 'Suspended (Template Error)' },
    { id: 2, name: 'Suspended (Unsafe Changes)' },
    { id: 3, name: 'Suspended (Unresolved Comments)' },
  ];
  // ELEMENT_DATA: PeriodicElement[] = [{ state: this.states[1] }];
  ELEMENT_DATA: PeriodicElement[] = [];

  displayedColumns: string[] = [
    'create_date',
    'update_date',
    'package',
    'state',
  ];

  dataSource = this.ELEMENT_DATA;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.setData();
  }

  setData() {
    for (let i = 0; i < 10; i++) {
      const randData = {
        create_date: new Date().toDateString(),
        update_date: new Date().toDateString(),
        package: Math.floor(Math.random() * 999999999),
        state: this.states[Math.floor(Math.random() * 3)]['name'],
      };
      this.ELEMENT_DATA.push(randData);
    }
  }

  switch(state: boolean) {
    state = !state;
  }

  refreshData() {
    this.ELEMENT_DATA = [];
    this.setData();

    this.dataSource = this.ELEMENT_DATA;
    console.log('Data refreshed');
  }
}

export interface PeriodicElement {
  create_date: string;
  update_date: string;
  package: number;
  state: string;
}

export interface State {
  id: number;
  name: string;
}

bootstrapApplication(App);

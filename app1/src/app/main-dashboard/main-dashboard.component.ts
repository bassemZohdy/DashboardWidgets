import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { Dashboard } from './../models/dashboard.model';
import { DashboardService } from './../services/dashboard.service';


@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css'],
})
export class MainDashboardComponent {

  ngOnInit() {
    this.dashboardService.fetchDashboard();
  }

  constructor(readonly dashboardService: DashboardService) {}
}

import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { DashboardChildComponent } from './components/dashboard-child/dashboard-child.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardChildComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  text = 'dashboard'

  // constructor(cd: ChangeDetectorRef) {
  //   setTimeout(() => {
  //     this.text = 'dashboard text changed'
  //     cd.detectChanges();
  //   }, 5000);
  // }

  handlerClick() {
    this.text = 'dashboard text changed by padre';
  }
}

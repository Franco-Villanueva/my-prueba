import { ChangeDetectionStrategy,Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-dashboard-child',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard-child.component.html',
  styleUrl: './dashboard-child.component.scss'
})
export class DashboardChildComponent implements OnInit {
  @Input() text: string = '';

  ngOnChanges(changes: SimpleChange):void{
    console.log('se inicializo el dashboard-child')
  }
  ngOnInit(): void {
    console.log('se inicializo el dashboard-child')
  }
}

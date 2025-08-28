import { Component } from '@angular/core';
import { UserDefineDirective } from '../../shared/userDefine.directive';



@Component({
  selector: 'app-item',
  standalone: true,
  imports: [UserDefineDirective],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  getEventFromDirective(event: any) {
    console.log('Custom event triggered:', event);
  } 

}

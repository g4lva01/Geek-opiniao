import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    standalone: false
})
export class CardComponent {
  @Input() photoCover:string = "";
  @Input() cardTitle:string = "";
  @Input() Id:string = "";
}
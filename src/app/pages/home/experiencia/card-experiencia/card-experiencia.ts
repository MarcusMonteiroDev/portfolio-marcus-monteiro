import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-experiencia',
  imports: [],
  templateUrl: './card-experiencia.html',
  styleUrl: './card-experiencia.css',
})
export class CardExperiencia {
  @Input() title: string = 'experiencia';
  @Input() company: string = 'company';
  @Input() period: string = 'periodo';
  @Input() tasks: string[] = [];
}

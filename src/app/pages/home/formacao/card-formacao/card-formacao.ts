import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-formacao',
  imports: [],
  templateUrl: './card-formacao.html',
  styleUrl: './card-formacao.css',
})
export class CardFormacao {
  @Input() title: string = 'formacao';
  @Input() school: string = 'school';
  @Input() period: string = 'periodo';
  @Input() tasks: string[] = [];
}

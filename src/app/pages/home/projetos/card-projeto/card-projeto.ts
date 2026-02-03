import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-projeto',
  imports: [],
  templateUrl: './card-projeto.html',
  styleUrl: './card-projeto.css',
})
export class CardProjeto {
  @Input() img_src: string = '';
  @Input() title: string = 'title';
  @Input() description: string = 'description';
  @Input() tags: string[] = ['teste', 'teste', 'teste'];
  @Input() link_projeto: string = '';
}

import { Component, Input } from '@angular/core';
import { SectionTitle } from '../utils/section-title/section-title';

@Component({
  selector: 'app-sobre-projeto',
  imports: [SectionTitle],
  templateUrl: './sobre-projeto.html',
  styleUrl: './sobre-projeto.css',
})
export class SobreProjeto {
  @Input() text: string = '';
}

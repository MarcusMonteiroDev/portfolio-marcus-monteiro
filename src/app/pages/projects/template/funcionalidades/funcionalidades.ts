import { Component, Input } from '@angular/core';
import { SectionTitle } from "../utils/section-title/section-title";

@Component({
  selector: 'app-funcionalidades',
  imports: [SectionTitle],
  templateUrl: './funcionalidades.html',
  styleUrl: './funcionalidades.css',
})
export class Funcionalidades {
  @Input() func: string[] = [];
}

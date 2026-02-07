import { Component, Input } from '@angular/core';
import { Titulo } from "../titulo/titulo";
import { SectionTitle } from "../utils/section-title/section-title";

@Component({
  selector: 'app-tecnologias',
  imports: [Titulo, SectionTitle],
  templateUrl: './tecnologias.html',
  styleUrl: './tecnologias.css',
})
export class Tecnologias {
  @Input() tech: string[] = [];
}

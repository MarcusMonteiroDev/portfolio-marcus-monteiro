import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkConhecerProjeto } from "./components/link-conhecer-projeto/link-conhecer-projeto";
import { SectionInicio } from "./components/section-inicio/section-inicio";
import { SectionSobreMim } from "./components/section-sobre-mim/section-sobre-mim";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LinkConhecerProjeto, SectionInicio, SectionSobreMim],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}

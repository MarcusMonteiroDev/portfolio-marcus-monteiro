import { Component } from '@angular/core';
import { Inicio } from "./inicio/inicio";
import { SobreMim } from "./sobre-mim/sobre-mim";
import { Projetos } from "./projetos/projetos";
import { Experiencia } from "./experiencia/experiencia";
import { Habilidades } from "./habilidades/habilidades";
import { Formacao } from "./formacao/formacao";
import { Contato } from "./contato/contato";

@Component({
  selector: 'app-home',
  imports: [Inicio, SobreMim, Projetos, Experiencia, Habilidades, Formacao, Contato],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

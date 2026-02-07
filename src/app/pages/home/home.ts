import { Component } from '@angular/core';
import { Inicio } from "./inicio/inicio";
import { SobreMim } from "./sobre-mim/sobre-mim";
import { Projetos } from "./projetos/projetos";
import { Experiencia } from "./experiencia/experiencia";
import { Habilidades } from "./habilidades/habilidades";
import { Formacao } from "./formacao/formacao";
import { Contato } from "./contato/contato";
import { Titulo } from "../projects/template/titulo/titulo";
import { Logo } from "../projects/template/logo/logo";
import { SobreProjeto } from '../projects/template/sobre-projeto/sobre-projeto';
import { Template } from "../projects/template/template";

@Component({
  selector: 'app-home',
  imports: [Inicio, SobreMim, Projetos, Experiencia, Habilidades, Formacao, Contato, Titulo, Logo, SobreProjeto, Template],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

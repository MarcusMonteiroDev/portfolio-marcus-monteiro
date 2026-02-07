import { Component } from '@angular/core';
import { SobreProjeto } from './sobre-projeto/sobre-projeto';
import { Funcionalidades } from "./funcionalidades/funcionalidades";
import { Tecnologias } from "./tecnologias/tecnologias";
import { Links } from "./links/links";

@Component({
  selector: 'app-template',
  imports: [SobreProjeto, Funcionalidades, Tecnologias, Links],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {

}

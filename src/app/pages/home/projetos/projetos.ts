import { Component } from '@angular/core';
import { CardProjeto } from "./card-projeto/card-projeto";

@Component({
  selector: 'app-projetos',
  imports: [CardProjeto],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos {

}

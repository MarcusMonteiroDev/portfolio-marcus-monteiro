import { Component } from '@angular/core';
import { DivFotoPerfil } from "./div-foto-perfil/div-foto-perfil";
import { DivTextoSobreMim } from "./div-texto-sobre-mim/div-texto-sobre-mim";
import { BtnDonwloadCurriculo } from "./btn-donwload-curriculo/btn-donwload-curriculo";

@Component({
  selector: 'app-section-sobre-mim',
  imports: [DivFotoPerfil, DivTextoSobreMim, BtnDonwloadCurriculo],
  templateUrl: './section-sobre-mim.html',
  styleUrl: './section-sobre-mim.css',
})
export class SectionSobreMim {

}

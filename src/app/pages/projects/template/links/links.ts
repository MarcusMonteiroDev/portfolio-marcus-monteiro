import { Component, Input } from '@angular/core';
import { SectionTitle } from "../utils/section-title/section-title";
import { Link } from './link/link';

@Component({
  selector: 'app-links',
  imports: [SectionTitle, Link],
  templateUrl: './links.html',
  styleUrl: './links.css',
})
export class Links {
  @Input() links: string[] = [];
}

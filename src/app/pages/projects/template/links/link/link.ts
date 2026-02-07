import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.html',
  styleUrl: './link.css',
})
export class Link {
  @Input() name: string = '';
  @Input() href: string = '';
}

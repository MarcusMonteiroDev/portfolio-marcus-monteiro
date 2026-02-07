import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.css',
})
export class Logo {
  @Input() img_src: string = '';
  @Input() img_description: string = '';
  @Input() img_width: string = "100";
  @Input() img_height: string = "100";
}

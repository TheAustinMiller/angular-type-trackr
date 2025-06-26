import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {
  @Input() keyStates: { [key: string]: boolean } = {};

  row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''];
  row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'];

  isPressed(key: string): boolean {
    return this.keyStates?.[key.toLowerCase()] || false;
  }
}

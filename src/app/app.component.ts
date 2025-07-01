import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote: string = '';
  currentIndex: number = 0;

  loadRandomQuote() {
    this.http.get('assets/quotes.txt', { responseType: 'text' }).subscribe(data => {
      const quotes = data.split('\n').filter(line => line.trim().length > 0);
      const randomIndex = Math.floor(Math.random() * quotes.length);
      this.quote = quotes[randomIndex].trim();
      this.currentIndex = 0;
    });
  }

  /**
   * KEYBOARD STUFF
   **/
  keyStates: { [key: string]: boolean } = {};

  constructor(private http: HttpClient) {
    this.loadRandomQuote();
    const keys = 'abcdefghijklmnopqrstuvwxyz'.split('').concat(['enter', 'backspace', 'shift', ' ']);
    keys.forEach(k => this.keyStates[k] = false);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const key = this.normalizeKey(event.key);
    if (this.keyStates[key]) return;

    this.keyStates[key] = true;

    const expectedChar = this.quote[this.currentIndex]?.toLowerCase() || '';

    if (key === expectedChar) {
      this.currentIndex++;
    } else if (key === 'backspace' && this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    const key = this.normalizeKey(event.key);
    this.keyStates[key] = false;
  }

  normalizeKey(key: string): string {
    key = key.toLowerCase();
    if (key === ' ') return ' ';
    if (key === 'enter') return 'enter';
    if (key === 'backspace') return 'backspace';
    if (key === 'shift') return 'shift';
    return key;
  }
}

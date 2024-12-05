import { Component } from '@angular/core';

@Component({
  selector: 'app-unordered-list',
  templateUrl: './unordered-list.component.html',
  styleUrl: './unordered-list.component.css'
})
export class UnorderedListComponent {
  phones: string[] = [
    'Apple iPhone SE 2020',
    'Google Pixel 8a',
    'OnePlus Nord 3 5G'
  ];
}

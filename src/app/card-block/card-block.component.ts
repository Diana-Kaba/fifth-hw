import { Component, Input, Output, EventEmitter, ContentChild, ElementRef } from '@angular/core';
import { Card } from '../shared/card';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrl: './card-block.component.css'
})
export class CardBlockComponent {
  @Input('phone')
  phone!: Card;
  @Input('discount')
  discount!: boolean;

  @Output() newPhoneEvent: EventEmitter<Card> = new EventEmitter();

  @ContentChild('colorTag') colorTag!: ElementRef;

  getPhoneById() {
    this.newPhoneEvent.emit(this.phone);
  }

  getDiscountedPrice(): number {
    return this.discount ? this.phone.price - (this.phone.price * 0.15) : this.phone.price; // Якщо знижка активована, відняти 15%
  }

  ngAfterContentInit() {
    this.colorTag.nativeElement.style.color = this.colorTag.nativeElement.innerText;
  }
}

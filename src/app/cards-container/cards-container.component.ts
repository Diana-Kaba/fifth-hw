import { Component } from '@angular/core';
import { Card } from '../shared/card';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent {
  products: Card[] = [
    { id: 1, name: 'Xiaomi Redmi Note 13 4G', price: 300, descr: 'The Xiaomi Redmi Note 13 4G smartphone is a relatively budget device equipped with the Android 13 operating system and a powerful eight-core Qualcomm Snapdragon 685 processor with a clock frequency of up to 2.8 GHz.', color: 'Black' },
    { id: 2, name: 'Samsung Galaxy A55 5G', price: 360, descr: "Samsung Galaxy A55 5G is a modern smartphone of 2024, equipped with the Android 14 operating system. The device has a slot for memory expansion and also supports Nano-SIM and eSIM, which allows you to use the SIM card in combination with another SIM card or memory card.", color: 'Green' },
    { id: 3, name: 'Nothing Phone (2a)', price: 330, descr: "Nothing Phone (2a) is a stylish smartphone with a minimalist design and powerful filling, designed for those who value functionality and aesthetics. Operating on the basis of Android 14, it is equipped with a MediaTek Dimensity 7200 Pro processor with an octa-core architecture and a frequency of 2.8 GHz, which ensures fast and smooth operation of the device.", color: 'Gray' },
    { id: 4, name: 'Xiaomi Poco X6 Pro', price: 280, descr: 'Xiaomi Poco X6 Pro is a modern smartphone of 2024. The device is based on the Android 14 operating system and an octa-core MediaTek Dimensity 8300-Ultra processor with a frequency of 3.35 GHz, which ensures efficient performance of various tasks.', color: 'Orange' }
  ];
  currentDescr: string = '';
  isDiscount: boolean = false;

  addDescr(newPhone: Card) {
    this.currentDescr = newPhone.descr;
  }

  switchDiscount() {
    this.isDiscount = true;
  }
}

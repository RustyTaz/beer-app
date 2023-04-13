import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-favorite-beer',
  templateUrl: './favorite-beer.page.html',
  styleUrls: ['./favorite-beer.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [NativeStorage],
})
export class FavoriteBeerPage implements OnInit {
  isListEmpty: boolean = true;
  favBeers: any = [];
  constructor(private nativeStorage: NativeStorage) {}

  ngOnInit() {
    if (localStorage.length > 0) {
      for (let [key, value] of Object.entries(localStorage)) {
        this.favBeers.push({ key: key, value: value });
      }
      this.isListEmpty = false;
    }
    console.log(this.favBeers);

    if (this.nativeStorage.keys() !== null) {
      for (let [key, value] of Object.entries(this.nativeStorage)) {
        this.favBeers.push({ key: key, value: value });
      }
      this.isListEmpty = false;
    }
  }

  deleteFromFavorite(key: string) {
    localStorage.removeItem(key);
    this.nativeStorage.remove(key);
    this.favBeers = this.favBeers.filter(
      (item: { key: string }) => item.key !== key
    );
  }
}

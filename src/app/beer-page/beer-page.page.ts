import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../services/beer.service';
import { HttpClientModule } from '@angular/common/http';
import { Beer } from '../models/beer';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer-page.page.html',
  styleUrls: ['./beer-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  providers: [BeerService, NativeStorage],
})
export class BeerPagePage implements OnInit {
  beerId: any;
  beer: Beer[];
  isDataLoaded: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private beerService: BeerService,
    private nativeStorage: NativeStorage
  ) {
    this.beerId = this.activatedRoute.snapshot.paramMap.get('id');
    this.beer = [
      {
        id: 0,
        name: '',
        tagline: '',
        first_brewed: '',
        description: '',
        abv: 0,
        image_url: '',
      },
    ];
    this.beerService.getBeer(this.beerId).subscribe((res) => {
      this.beer = res;
    });
  }

  ngOnInit() {}
  addToFavorite() {
    localStorage.setItem("mybeer"+ this.beer[0].id, JSON.stringify(this.beer[0].name));
    this.nativeStorage.setItem("mybeer"+ this.beer[0].id, JSON.stringify(this.beer[0].name)).then(
      () => console.log('Stored item!'),
      (error) => console.error('Error storing item', error)
    );
  }
}

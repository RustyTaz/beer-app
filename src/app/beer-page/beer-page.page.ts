import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../services/beer.service';
import { HttpClientModule } from '@angular/common/http';
import { Beer } from '../models/beer';

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer-page.page.html',
  styleUrls: ['./beer-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  providers: [BeerService],
})
export class BeerPagePage implements OnInit {
  beerId: any;
  beer: Beer[];
  isDataLoaded: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private beerService: BeerService
  ) {
    this.beerId = this.activatedRoute.snapshot.paramMap.get('id');
    this.beer = [{
      id: 0,
      name: '',
      tagline: '',
      first_brewed: '',
      description: '',
      abv: 0,
      image_url: '',
    }];
    this.beerService.getBeer(this.beerId).subscribe((res) => {
      this.beer = res;
    });
  }

  ngOnInit() {
      
  }
}

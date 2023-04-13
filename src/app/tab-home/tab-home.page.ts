import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BeerService } from '../services/beer.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { BeerCardComponent } from '../beer-card/beer-card.component';

@Component({
  selector: 'app-tab-home',
  templateUrl: 'tab-home.page.html',
  styleUrls: ['tab-home.page.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule, CommonModule, NgxPaginationModule, BeerCardComponent],
  providers: [BeerService]
})
export class TabHomePage {
  beers: any = [];
  currentPage: number=1;

  constructor(private beerService: BeerService) {}
  ngOnInit(){
    this.beerService.getBeerList().subscribe((res)=>{
      this.beers=res.slice(0,15);
      console.log(this.beers);
    }) 
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { BeerPagePage } from '../beer-page/beer-page.page';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule, CommonModule, NgxPaginationModule, RouterModule],
})
export class BeerCardComponent {
  @Input() beer: any;
  componentBeerPage = BeerPagePage;
  value: any;
  
  constructor() { }

  ngOnInit() {
    this.value=this.beer.id;
  }

}

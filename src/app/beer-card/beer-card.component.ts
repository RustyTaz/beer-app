import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../models/beer';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, HttpClientModule, CommonModule, NgxPaginationModule],
})
export class BeerCardComponent  implements OnInit {
  @Input() beer: any;

  constructor() { }

  ngOnInit() {}

}

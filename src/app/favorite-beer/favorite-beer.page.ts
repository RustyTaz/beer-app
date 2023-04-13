import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-favorite-beer',
  templateUrl: './favorite-beer.page.html',
  styleUrls: ['./favorite-beer.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FavoriteBeerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

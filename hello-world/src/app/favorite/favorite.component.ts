import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;
  faCoffee = faCoffee;
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}

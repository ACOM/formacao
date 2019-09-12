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
  countries = [
    {name: 'Australia', rating: 0, other: "lorem ipsum"},
    {name: 'India', rating: 1, other: "lorem ipsum"},
    {name: 'Canada', rating: 3, other: "lorem ipsum"},
    {name: 'Mexico', rating: 2, other: "lorem ipsum"},
    {name: 'UK', rating: 4, other: "lorem ipsum"},
    {name: 'Germany',rating: 2, other: "lorem ipsum"},
    {name: 'USA',rating: 1, other: "lorem ipsum"}
];
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-recomendadas',
  templateUrl: 'recomendadas.html'
})
export class RecomendadasPage {

  public festas = [
	{
		"id": 1,
		"nome": "Aidan",
		"data": "Sat, 8th, 2017",
		"image": "http://imageshack.com/f/p9Td3Aazj"
	},
	{
		"id": 2,
		"nome": "Julian",
		"data": "Wed, 26th, 2017",
		"image": "http://imageshack.com/f/ex9043baj"
	},
	{
		"id": 3,
		"nome": "Mariko",
		"data": "Sun, 26th, 2017",
		"image": "http://imageshack.com/f/p9Td3Aazj"
	},
	{
		"id": 4,
		"nome": "Megan",
		"data": "Fri, 29th, 2016",
		"image": "http://imageshack.com/f/ex9043baj"
	},
	{
		"id": 5,
		"nome": "Yuli",
		"data": "Mon, 7th, 2017",
		"image": "http://imageshack.com/f/p9Td3Aazj"
	},
	{
		"id": 6,
		"nome": "Madeson",
		"data": "Tue, 19th, 2016",
		"image": "http://imageshack.com/f/ex9043baj"
	},
	{
		"id": 7,
		"nome": "Rachel",
		"data": "Mon, 12th, 2018",
		"image": "http://imageshack.com/f/p9Td3Aazj"
	},
	{
		"id": 8,
		"nome": "Giacomo",
		"data": "Mon, 20th, 2017",
		"image": "http://imageshack.com/f/ex9043baj"
	},
	{
		"id": 9,
		"nome": "Elliott",
		"data": "Wed, 10th, 2016",
		"image": "http://imageshack.com/f/p9Td3Aazj"
	},
	{
		"id": 10,
		"nome": "Judith",
		"data": "Fri, 3rd, 2017",
		"image": "http://imageshack.com/f/ex9043baj"
	}];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
  
  }

}

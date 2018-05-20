import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { pokemonDataService } from '../../providers/data/data';
import { PokemonDetailPage } from '../pokemon-detail/pokemon-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  pocketMonsters = [];
  searchQuery: string = '';

  constructor(public nav: NavController, public dataService: pokemonDataService, private navParams: NavParams) {

   
  }

  ionViewDidLoad() {
    
           
    
           this.dataService.getAllPokemon().then((data) => {
    
               data.map((pocketMonster) => {

                   this.pocketMonsters = data;
                   return pocketMonster;
                   
    
               });    
    
               console.log(this.pocketMonsters);
           });
           
       }

       itemTapped($event, pocketMonster){
        console.log("itemTapped function called! ");
        console.log("pocketMonster:");
        console.dir(pocketMonster);

        this.nav.push(PokemonDetailPage, pocketMonster);   
    }

  //ngOnInit(){
    //this.dataService.getAllPokemon()
      //.subscribe(data => {
        //this.pokemonList = data;
    //});
  //}

  

}

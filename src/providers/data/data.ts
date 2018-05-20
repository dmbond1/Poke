import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class pokemonDataService {
 
    data: any;
 
    constructor(public http: Http) {
 
    }

    getAllPokemon() {
      if(this.data){
        return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

        this.http.get('assets/data/pokemon.json').map(res => res.json()).subscribe(data => {
            this.data = data.pocketMonsters;
            resolve(this.data);
        });

    });
      }
 
    
 
}


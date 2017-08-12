import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GenerosProvider {

  constructor(public http: Http) {
    
  }

// alterar quando o endpoint estiver pronto
  getGeneros(){
    let res = [];
    for(let i = 0; i < 20;i++){
      res.push({nome:"Rock " + i,icone:"assets/images/heavymetal.png"});
    }
    return Promise.resolve(res);
  }

}

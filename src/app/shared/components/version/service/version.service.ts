import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor() { }

  getMyVersion(){
    return  {
      version:environment.version,
      title:"Bonne nouvelle",
      news:"Une nouvelle version est disponible, cliquez sur METTRE À JOUR pour continuer à accéder à vos comptes."
    }
  }
}

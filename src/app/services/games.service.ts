import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _HttpClient: HttpClient) { }

  gamesURL:string='https://free-to-play-games-database.p.rapidapi.com/api/games';

  getAllGame(): Observable<any> {
    return this._HttpClient.get(this.gamesURL);
  }

  getGameByPlatform(type:any): Observable<any> {
    return this._HttpClient.get(this.gamesURL,{
      params:{
        platform:type
      }
    })
  }

  getGameByCategory(type:any): Observable<any> {
    return this._HttpClient.get(this.gamesURL,{
      params:{
        category:type
      }
    })
  }

  getSortedGames(type:any): Observable<any> {
    return this._HttpClient.get(this.gamesURL,{
      params:{
        'sort-by':type
      }
    })
  }

  getGamesDetails(gameId:any): Observable<any> {
    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/game',{
      params:{
        id:gameId
      }
    })
  }


}

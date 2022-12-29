import { ViewportScroller } from '@angular/common';
import { GamesService } from './../../services/games.service';
import { GameInfo } from './../../interfaces/game-info';
import { Component, OnInit, ViewChild,ElementRef,HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _AuthService: AuthService, private _GamesService: GamesService, private _ViewportScroller:ViewportScroller) { }

  isLogged: boolean = false;
  recommendedGames: GameInfo[] = [];
  recentlyAdded: GameInfo[] = [];
  mostPlayed: GameInfo[] = [];
  communityRecommendations: GameInfo[] = [];
  isLoading:boolean=false;
  show:boolean=false;

  ngOnInit(): void {
    this.isLoading=true;
    this._AuthService.userData.subscribe({
      next: () => {
        if (this._AuthService.userData.getValue() != null) {
          this.isLogged = true
        }
        else {
          this.isLogged = false;
        }
      }
    })

    let x = this._GamesService.getAllGame().subscribe({
      next: (response) => this.recommendedGames = response.splice(0,3)
    })

    let y = this._GamesService.getGameByCategory('fantasy').subscribe({
      next:(response)=>this.recentlyAdded=response.splice(4,10)
    })
    
    let z = this._GamesService.getGameByCategory('shooter').subscribe({
      next:(response)=>this.mostPlayed=response.splice(5,5)
    })
    let k = this._GamesService.getSortedGames('popularity').subscribe({
      next:(response)=>this.communityRecommendations=response.splice(0,2)
    })

    if(x && y &&z && k){
      this.isLoading=false;
    }
  }

  on(x:HTMLVideoElement){
    x.muted=true;
    x.play()
    .catch((err)=>{
      console.log('No Video');
    });
  }

  off(x:HTMLVideoElement){
    x.muted=true;
    x.pause();
  }


  scrollToTop() {
    this._ViewportScroller.scrollToPosition([0, 0]);
  }

  @ViewChild('scrollable') scroll!: ElementRef;

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    let [x,y]=this._ViewportScroller.getScrollPosition()
    if(y >=300){
      this.show=true;
    }
    else{
      this.show =false;
    }
  }


}

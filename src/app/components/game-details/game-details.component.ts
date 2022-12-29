import { GameInfo } from './../../interfaces/game-info';
import { GamesService } from './../../services/games.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute, private _GamesService: GamesService) { }

  gameDetails: GameInfo = {};
  paragraphs: any[] = [];
  show: boolean = false;
  isLoading:boolean=false;

  ngOnInit(): void {
    this.isLoading=true;
    let { id } = this._ActivatedRoute.snapshot.params;
    this._GamesService.getGamesDetails(id).subscribe({
      next: (response) => {
        this.gameDetails = response;
        let { description } = response;
        this.paragraphs = description.split('\r\n\r\n');
        this.isLoading=false;
      }
    })
  }
  on(x:HTMLVideoElement){
    x.muted = true;
    x.play()
    .catch((error) => {
      console.log('No Video...');
    });
  }
  off(x:HTMLVideoElement){
    x.muted=true;
    x.pause();
  }

  click() {
    this.show = !this.show;
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    items: 1,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: false
  }

}

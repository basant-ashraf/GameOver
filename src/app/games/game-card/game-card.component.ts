import { GameInfo } from './../../interfaces/game-info';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  constructor() { }

  @Input() item:any='';

  on(x:HTMLVideoElement){
    x.muted = true;
    x.play()
    .catch((error) => {
      console.log('No Video...');
    });
  }
  off(x:HTMLVideoElement){
    x.muted = true;
    x.pause();
  }

  ngOnInit(): void {
  }

}

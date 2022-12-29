import { GameInfo } from './../../interfaces/game-info';
import { GamesService } from './../../services/games.service';
import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _GamesService: GamesService, private _ActivatedRoute: ActivatedRoute, private _ViewportScroller: ViewportScroller) { }
  items: GameInfo[] = [];
  oldGames: GameInfo[] = [];
  newGames: GameInfo[] = [];
  show:boolean=false;

  // count: number = 20;
  isLoading: boolean = false;

  displayMoreGames() {
    this.oldGames = this.items.splice(0, 20);
    this.newGames = this.newGames.concat(this.oldGames);
  }


  ngOnInit(): void {
    this.isLoading = true;
    this._ActivatedRoute.paramMap.subscribe((params) => {
      let listBy = params.get('listBy');
      let type = params.get('type');

      if (listBy == 'all') {
        this._GamesService.getAllGame().subscribe({
          next: (response) => {
            this.isLoading = false;
            this.items = response;
            this.newGames = response.splice(0, 20);
          }
        })
      }

      if (listBy == 'platforms') {
        this._GamesService.getGameByPlatform(type).subscribe({
          next: (response) => {
            this.isLoading = false;
            this.items = response;
            this.newGames = response.splice(0, 20);
          }
        })
      }
      if (listBy == 'categories') {
        this._GamesService.getGameByCategory(type).subscribe({
          next: (response) => {
            this.isLoading = false;
            this.items = response;
            this.newGames = response.splice(0, 20);
          }
        })
      }
      if (listBy == 'sort-by') {
        this._GamesService.getSortedGames(type).subscribe({
          next: (response) => {
            this.isLoading = false;
            this.items = response;
            this.newGames = response.splice(0, 20);
          }
        })
      }
    })

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

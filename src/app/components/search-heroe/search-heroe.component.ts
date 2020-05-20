import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
  styleUrls: ['./search-heroe.component.css'],
})
export class SearchHeroeComponent implements OnInit {
  hero: any = [];
  heroD: any ={}
  constructor(
    private _activeRoute: ActivatedRoute,
    private _heroService: HeroService
  ) {
    this._activeRoute.params.subscribe((params) => {
      console.log(params['id'], 'SEARCHIN');
      this.hero = this._heroService.buscarHeroe(params['id'])
      console.log(this.hero)
      this.heroD = this.hero[0]
      console.log(JSON.stringify(this.heroD.nombre))
    });
  }

  ngOnInit(): void {}
}

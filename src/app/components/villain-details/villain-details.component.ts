import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-villain-details',
  templateUrl: './villain-details.component.html',
  styleUrls: ['./villain-details.component.css']
})
export class VillainDetailsComponent implements OnInit {

  hero:any = [];
  imgCasa:string;

 constructor(private _activeRoute: ActivatedRoute, private _heroService:HeroService) {
  
   this._activeRoute.params.subscribe( params=>{
     //console.log(params['id']);
     this.hero = this._heroService.getHero(params['id']);
   })
  }
  ngOnInit(): void {
  }

}

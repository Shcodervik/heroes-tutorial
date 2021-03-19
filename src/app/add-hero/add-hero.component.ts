import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  hero: Hero | undefined;
  name: string = '';
  title: string = '';

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ) { 
    
  }

  ngOnInit(): void {
 
  }

  addHero(name: string, title: string): void {
    this.heroService.addHero(name, title)
      .subscribe(hero => this.hero = hero);

  }


}

import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {

  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    this.route.queryParams.subscribe(params => {
      this.heroService.getHero(this.route.snapshot.paramMap.get('id'))
      .subscribe(hero => this.hero = hero);
    });
  }

  goBack(): void {
    this.location.back();
  }

  updateHero(hero: Hero): void {
    this.heroService.updateHero(hero)
      .subscribe(hero => this.hero = hero);

  }

}

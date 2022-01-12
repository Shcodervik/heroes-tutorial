import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

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
    private location: Location,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  private log(message: string): void {
    this.messageService.add(`Hero-detail: ${message}`);
  }

  getHero(): void {
    this.route.queryParams.subscribe(params => {
      this.heroService.getHero(this.route.snapshot.paramMap.get('id'))
        .subscribe(hero => {
          this.hero = hero;
          this.log(`HeroService: fetched hero with id = ${hero.id}`);
        });
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

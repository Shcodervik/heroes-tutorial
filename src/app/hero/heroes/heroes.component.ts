import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero/hero';
import { HeroService } from 'src/app/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes?: Hero[];

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(response => {
      this.heroes = response;
    });
  }

  deleteHero(hero: Hero): void {
    this.heroService.deleteHero(hero).subscribe();
  }

}

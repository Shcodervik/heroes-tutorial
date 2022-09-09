import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from 'src/app/hero/hero';
import { HeroService } from 'src/app/hero/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  hero: Hero | undefined;
  name = '';
  title = '';

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

  goBack(): void {
    this.location.back();
  }
}

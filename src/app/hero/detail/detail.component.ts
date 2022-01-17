import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from 'src/app/hero/hero';
import { HeroService } from 'src/app/hero/hero.service';
import { MessageService } from 'src/app/message/message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})


export class DetailComponent implements OnInit {

  hero: Hero | undefined;
  base64data: string | ArrayBuffer | null = null;

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
    hero.image = this.base64data?.toString() || '';
    console.log(this.hero);
    this.heroService.updateHero(hero)
      .subscribe(hero => {
        this.hero = hero;
        console.log(hero);
      });
  }

  processFile(imageInput: any): void {
    if (this.hero) {
      const file: File = imageInput.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.base64data = reader.result;
        console.log(this.base64data);
      };
    }
  }

}

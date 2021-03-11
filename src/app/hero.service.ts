import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, private messageService: MessageService) { }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  
  private heroesUrl = 'http://localhost:8080/resources';  // URL to web api
  private heroUrl = 'http://localhost:8080/hero/';
  private updateHeroUrl = 'http://localhost:8080/update/hero/';


  getHeroes(): Observable<Hero[]> {
    //this.messageService.add('HeroService: fetched heroes');
    //return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl);
   
  }
  getHero(id: number): Observable<Hero | undefined> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(this.heroUrl + id);
    //return this.http.get<Hero[]>(this.heroesUrl).subscribe(heroes => heroes.find(hero => hero.id == id));
    //return of(HEROES.find(hero => hero.id === id));
  }
  updateHero(id: number, name: string, title: string){
    this.messageService.add(`HeroService: updated hero id=${id}`);
    return this.http.get<Hero>(this.updateHeroUrl + id + "/" + name + "/" + title);
  }
}

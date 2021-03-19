import { Injectable } from '@angular/core';
import { Hero } from './hero';
//import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient, 
    private messageService: MessageService
  ) { }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  // URLs to web api
  private url = 'http://localhost:8081/hero';
  private heroUrl = 'http://localhost:8081/hero/';


  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.url);
  }

  getHero(id: string): Observable<Hero | undefined> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(this.heroUrl + id);
  }

  updateHero(hero: Hero) {
    this.messageService.add(`HeroService: updated hero id=${hero.id}`);
    return this.http.put(this.url + "/" + hero.id, hero);
  }

  addHero(name: string, title: string) {
    var hero = {"name" : name, "title" : title}; 
    this.messageService.add(`HeroService: added new hero, name=${hero.name}`);
    return this.http.post(this.url, hero);
  }

  deleteHero(hero: Hero) {
    this.messageService.add(`HeroService: deleted hero, name=${hero.name}`);
    return this.http.delete<Hero>(this.url + "/" + hero.id)
  }
}

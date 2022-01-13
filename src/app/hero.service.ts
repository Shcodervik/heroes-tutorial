import { Injectable } from '@angular/core';
import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  // URL to web api
  private url = environment.apiUrl; // 'http://localhost:8081/hero';

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.url);
  }

  getHero(id: string | null): Observable<Hero> {
    return this.http.get<Hero>(`${this.url}/${id}`);
  }

  updateHero(hero: Hero): Observable<Hero> {
    this.log(`HeroService: updated hero id=${hero.id}`);
    return this.http.put<Hero>(`${this.url}/${hero.id}`, hero);
  }

  addHero(name: string, title: string): Observable<Hero> {
    const hero: Hero = {
      name,
      title
    };
    this.log(`HeroService: added new hero, name=${hero.name}`);
    return this.http.post<Hero>(this.url, hero);
  }

  deleteHero(hero: Hero): Observable<Hero> {
    this.log(`HeroService: deleted hero, name=${hero.name}`);
    return this.http.delete<Hero>(`${this.url}/${hero.id}`);
  }
}

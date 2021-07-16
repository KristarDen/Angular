import { isNgTemplate } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import {Block, Article} from '../article';
import {Routes, RouterModule, Router} from '@angular/router';
import { HttpClient, HttpClientModule}   from '@angular/common/http';
import { OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute} from '@angular/router';
  
@Component({
    selector: 'app-page',
    templateUrl: 'page.component.html',
    styleUrls: ['page.component.css']
})

export class PageComponent implements OnInit  { 
  articles: Article [] = [];
  article: Article ;
  title: string = "";
  Data: Date = new Date(Date.now());
  id: number = -1;

  constructor(private activateRoute: ActivatedRoute, private router: Router,private http: HttpClient)
  {
    activateRoute.params.subscribe(params => this.id = params['id']);
    
    this.article = this.articles[1];
  }

  ngOnInit(){
    this.http.get('assets/articles.json').subscribe((data:any) => this.articles = data["articleList"]);
    
    console.log(this.articles);
  }
}
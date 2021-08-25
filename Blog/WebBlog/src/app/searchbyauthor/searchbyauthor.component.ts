import { isNgTemplate } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import {Block, Article} from '../article';
import {Routes, RouterModule, Router} from '@angular/router';
import { HttpClient, HttpClientModule}   from '@angular/common/http';
import { OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-searchbyauthor',
  templateUrl: './searchbyauthor.component.html',
  styleUrls: ['./searchbyauthor.component.css']
})
 
export class SearchbyauthorComponent implements OnInit {

  articles: Article [] = [];
  article: Article ;
  title: string = "";
  Data: Date = new Date(Date.now());
  author: string = "";

  constructor(private activateRoute: ActivatedRoute, private router: Router,private http: HttpClient)
  {
    activateRoute.params.subscribe(params => this.author = params['author']);
    this.article = this.articles[1];
  }

  ngOnInit(){
    this.http.get('assets/articles.json').subscribe((data:any) => this.articles = data["articleList"]);
    console.log(this.articles);
  }
  getDescripton(id: number){
    let description: string ;
    
    for (let item of this.articles[id].blocks){

      if(item.type == 0){
        description = item.text.substr(0, 300);
        description += "..."
        return description;
      }

    }
    return false;
  }
  getFirstPhoto(id: number){
    let source: string ;
    
    for (let item of this.articles[id].blocks){

      if(item.type == 1){
        source = item.text;
        return source;
      }

    }
    return false;
  }
}
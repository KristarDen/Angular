import { isNgTemplate } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import {Block, Article} from './article';
import {Routes, RouterModule} from '@angular/router';
import { HttpClient, HttpClientModule}   from '@angular/common/http';
import { OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'blog-page',
  template: `
  
  <div class="container" *ngFor="let article of articles">
    <h1>{{article.name}}</h1>
    <div class="ArticleInfo">
      <div class="author">
        автор : {{article.author}}
      </div>
      <div class="Tags">
        <ng-template class="tag" ngFor let-item [ngForOf]="article.tags" let-i="index">
          <div *ngIf="i == 0" class="tag">tags: #{{item}}</div>
          <div *ngIf="i != 0" class="tag">#{{item}}</div>
        </ng-template>
    </div>
    <div><a class="Read" [routerLink]="['page', article.id]" routerLinkActive='active'> Читать </a></div>
  </div>
  
  `,
  styleUrls: ['./app.component.css']
})

export class BlogComponent implements OnInit 
{
  articles: Article [] = [];
  title: string = "";
  Data: Date = new Date(Date.now());

  constructor(private http: HttpClient){}

  ngOnInit(){
          
    this.http.get('assets/articles.json').subscribe((data:any) => this.articles = data["articleList"]);
    console.log(this.articles);
  }
}

/*
export class AppComponent {
  title = 'WebBlog';
  Data = new Date(Date.now());
  article = new Article("Родословная американского танто",["knives","history"],"Denis",
  [new Block(0,"Американский танто окружен огромным числом домыслов, легенд и попросту недомолвок. Во многом, это, конечно же, своего рода часть его маркетингового образа, упорно создаваемого американской ножевой индустрией. Но, дыма без огня всё-таки не бывает. И американский танто до сих пор остаётся крайне интересной темой для разговора. Попробуем и мы разобраться что к чему в истории, конструкции и назначении этого замечательного ножа."),
   new Block(1,"assets/tanto1.jpg"),
   new Block(0,`Создание авторских ножей в США имеет чрезвычайно глубокие корни. Мастера и просто искатели, постоянно выдумывающие, изготавливающие и выставляющие на продажу что-то своё существуют там очень давно. Достаточно вспомнить Джона Вашингтона Сирса с его нессмуком или Ризона и Джеймса Боуи с их ножом-«однофамильцем».

   Американский найфмейкер китайского происхождения Боб Люм, несомненно относился к этой славной когорте изобретателей. Согласно полуофициальной легенде, считается, что именно он открыл танто для широких американских масс в 1978 году. Его нож не повторял японские «маленькие мечи» дословно, а был некоторой современной переработкой. Он отличался изящной плавностью форм, чем здорово напоминал традиционный айкути. Такой тип ножа сейчас порой так и называют «танто Люма», из чего мы можем сделать вывод, что от того, что мы привыкли называть именно «американским танто», он несколько отличается.
   
   Тем не менее, начало популяризации танто было положено. И в этом – главная заслуга Люма.
   
   Тот вид, к которому мы привыкли американскому танто придал другой, не менее знаменитый и, несомненно, куда более одиозный человек – глава Cold Steel Линн Томпсон.
   
   Для начала, Томпсон несколько упростил форму клинка, придав ему тот самый знаменитый «стамесочный» вид. Чем значительно повысил его технологичность. Да и дизайн многие полюбили именно этот. Очень уж похож такой танто на «настоящую» катану.
   
   А затем, благодаря своему напору и крайне активной  и умелой рекламе, Томпсон раскрутил американский танто, сделал его всемирно известным и массовым.
   
   Сразу стоит оговориться, что тот самый знаменитый кончик американского танто, о котором пойдёт речь ниже, не является изобретением президента Cold Steel. При всём уважении и восхищении этой персоной, стоит отметить, что танто такой формы, хоть и не были самыми массовыми, но всё-таки известны в Японии ещё с 8-го века. Некоторые из них сохранились и до сих пор хранятся в храмах.
   
   Что, впрочем, не отменяет того факта, что все любители американского танто должны быть благодарны именно Томпсону, обратившему внимание на этот замечательный нож, а затем, фактически, продавшему его всему миру.
   
   Очень часто честь изобретения американского танто приписывают другому известному найфмейкеру Филу Харстфилду. Но тут необходимо отметить важный факт: да, кончик клинка танто Хартсфилда имеет ту самую «рубленую» форму, но, при этом, он отличается односторонней заточкой, как у зубила, в то время, как дизайнеры Cold Steel остались верны традиционной двусторонней заточке.
   
   В принципе форма клинка типа «американский танто» не является запатентованной ни одним из производителей, а потому широко воспроизводится, модифицируется и видоизменяется по всему миру`),
   new Block(1,"assets/tanto3.jpg"),
   new Block(3,"Особенности строения и основные преимущества американского танто."),
   new Block(1,"assets/tanto4.jpg"),
   new Block(0,`Несомненно, что многим американский танто нравится именно благодаря очертаниям его клинка. Лёгкая кривизна клинка, плавно переходящая в длинную прямую рукоять, острие клинка, очень похожее на то самое «киссаки» японских катан, действительно делают этот нож похожим скорее на маленький самурайский меч.

   Но есть у американского танто и ряд вполне практических преимуществ:
   
   Во-первых, чрезвычайная прочность острия клинка. Особенно хорошо эта особенность строения проявляется в сочетании с высокими прямыми спусками и большими углами заточки, часто намеренно делающимися на «передней» режущей кромке. В результате, таким клинком можно без опаски протыкать, подцеплять, ковырять что-то вязкое и твердое, что обычно не рекомендовано обычным ножам.
   
   Во-вторых, у этого клинка прекрасная проникающая способность при работе по твёрдым поверхностям. Линн Томпсон посвятил немало времени эффектным демонстрациям «бронебойных» свойств американского танто. Впрочем, встречаются люди, утверждающие, что лучшего ножа для вскрытия мешков с удобрениями они в жизни в руках не держали. Мотайте на ус.
   
   В-третьих, наличие двух режущих кромок значительно повышает универсальность этого ножа. Так, длинную основную режущую кромку американского танто можно сделать тонко сведенной и подходящей для большинства работ, а носовую же часть заточить на большой угол и без опаски вскрывать консервы, резать прочную упаковку, картон или даже подковыривать, или отжимать что-то громоздкое или тугое. Также, эта часть может работать как скребок или стамеска. В целом, обоим участкам РК можно сделать различные спуски либо углы заточки, а возиться с плавным переходом одной в другую, как у классических ножей – совсем не нужно.
   
   Ну и в-четвёртых, переход граней, который образует угол между двумя участками режущей кромки. Сам по себе он явно прочнее острия обычных ножей. При этом он порождает особую технику реза - при помощи угла пересечения кромок. Тут обычная физика: удельное давление большое, сопротивление маленькое. Получается нечто вроде принципа зуба пилы. При этом, рез получается легко контролируемым и аккуратным, позволяющим работать в необычных условиях с разными материалами. То же вскрытие внешнего слоя двухслойной изоляции проводов, произведение аккуратных порезов и нарезку плотных материалов – кожи, ковролина, линолеума и тому подобного таким клинком делать чрезвычайно удобно.`),
   new Block(0,`Итак, перечислим основные особенности и преимущества американского танто:

   1. Острие клинка американского танто очень прочно и обладает высокой проникающей способностью;
   2. У танто два разных участка режущей кромки, которые можно приспособить для различных работ;
   3. Угол перехода между режущими кромками, так называемый «зуб», имеет особые режущие свойства;
   4. При всей кажущейся сложности, вся суть американского танто – технологическое упрощение: такой клинок изготовить и заточить несложно, угловатый кончик ножа, в отличие от закругленного, точить тоже проще.`),
   new Block(1,"assets/tanto5.gif"),
   new Block(3,"Тест ножа Cold Steel Recon Tanto ( AUS8 & SK5 )"),
   new Block(1,"assets/tanto2.jpg"),
   new Block(2,'assets/recon_tanto_test1.mp4')
  ]
  );
}*/


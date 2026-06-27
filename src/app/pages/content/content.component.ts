import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {data} from '../../data/data'

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css'],
    standalone: false
})
export class ContentComponent implements OnInit {
  photoCover:string = ""
  contentTitle:string = ""
  contentOpinion:string = ""
  contentSinopse:string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => {
     this.id = value.get("id");
     this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id:string | null){
    const result = data.filter(article => article.id == id)[0]

    if (result) {
      this.contentTitle = result.title
      this.contentOpinion = result.opinion
      this.photoCover = result.photoCover
      this.contentSinopse = result.sinopse
    } else {
      this.router.navigate(['']);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
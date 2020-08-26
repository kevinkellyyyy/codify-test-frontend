import { Component, OnInit } from '@angular/core';
import { AllSvcService } from '../services/all-svc.service';
import { Tag } from '../interface/tag';
import { Base } from '../interface/base';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  rawData: Base;
  tags: Tag[];

  constructor(public postSvc: AllSvcService, private router: Router) { }

  ngOnInit(): void {
    this.postSvc.getAllTag().subscribe((tagList) => {
      this.rawData = tagList;
      this.tags = this.rawData.data;
    })
  }

  getPostByTag(tag: string): void {
    console.log(tag)
    this.router.navigate([`/postByTag/${tag}`]);
  }

}

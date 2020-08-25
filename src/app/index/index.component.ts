import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post';
import { AllSvcService } from '../services/all-svc.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  posts: Post[];

  constructor(private postSvc: AllSvcService) { }

  ngOnInit(): void {
    this.postSvc.getAllPost().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    })
  }

}

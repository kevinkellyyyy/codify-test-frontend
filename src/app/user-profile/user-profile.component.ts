import { Component, OnInit } from '@angular/core';
import { AllSvcService } from '../services/all-svc.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interface/user';
import { Base } from '../interface/base';
import { Post } from '../interface/post';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  rawData: Base;
  userData: User[];
  postByUser: Post[];
  
  constructor(
    public postSvc: AllSvcService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  getUserProfile(): void {
    this.postSvc.getUserProfile(this.activatedRoute.snapshot.paramMap.get('id'))
    .subscribe((data) => {
      this.rawData = data;
      this.userData = this.rawData.data;
      console.log(this.rawData, this.userData)
    })
  }

}

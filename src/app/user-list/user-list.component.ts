import { Component, OnInit } from '@angular/core';
import { AllSvcService } from '../services/all-svc.service';
import { User } from '../interface/user';
import { Base } from '../interface/base';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  rawData: Base;
  users: User[];
  constructor(
    public postSvc: AllSvcService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.postSvc.getAllUser().subscribe((users) => {
      this.rawData = users;
      this.users = this.rawData.data;
      console.log(this.users);
    })
  }

  gotoUserProfile(id: string){
    this.router.navigate([`/userPrf/${id}`]);
  }

}

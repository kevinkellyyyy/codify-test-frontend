import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post';
import { AllSvcService } from '../services/all-svc.service';
import { Base } from '../interface/base';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  rawData: Base;
  posts: Post[];
  comments: Comment[];
  closeResult: string;
  picData1: any;

  constructor(
    public postSvc: AllSvcService, 
    private modalService: NgbModal,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.postSvc.getAllPost().subscribe((data) => {
      this.rawData = data;
      this.posts = this.rawData.data
      console.log(this.posts);
    })
  }

  getComment(id: string): void {
    this.postSvc.getComment(id).subscribe((data) => {
      this.rawData = data;
      this.comments = this.rawData.data;
      console.log(this.comments)
    })
    for(let i = 0; i < this.posts.length; i++){
      if(this.posts[i].id === id){
        this.picData1 = this.posts[i]
      }
    }
  }

  gotoTagPosts(tag: string){
    this.router.navigate([`/postByTag/${tag}`]);
    this.clear();
  }

  gotoUserProfile(id: string){
    this.router.navigate([`/userPrf/${id}`]);
  }

  open(content) {
    this.modalService.open(content, {size: 'lg', windowClass: 'modalcss'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      this.clear();
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      this.clear();
      return 'by clicking on a backdrop';
    } else {
      this.clear();
      return  `with: ${reason}`;
    }
  }

  clear(){
    this.comments = null
  }

}

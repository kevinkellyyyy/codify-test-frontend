import { Component, OnInit } from '@angular/core';
import { AllSvcService } from '../services/all-svc.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Post } from '../interface/post';
import { Base } from '../interface/base';

@Component({
  selector: 'app-post-by-tag',
  templateUrl: './post-by-tag.component.html',
  styleUrls: ['./post-by-tag.component.css']
})
export class PostByTagComponent implements OnInit {
  tagParam: string;
  rawData: Base;
  postByTag: Post[];
  comments: Comment[];
  closeResult: string;
  picData1: any;
  
  constructor(
    public postSvc: AllSvcService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal 
  ) { }

  ngOnInit(): void {
    this.tagParam = this.activatedRoute.snapshot.paramMap.get('tag');
    this.postSvc.getPostByTag(this.tagParam).subscribe((data) => {
      this.rawData = data;
      this.postByTag = this.rawData.data;
      console.log(this.postByTag);
    })
  }

  gotoUserProfile(id: string){
    this.router.navigate([`/userPrf/${id}`]);
  }

  getComment(id: string): void {
    this.postSvc.getComment(id).subscribe((data) => {
      this.rawData = data;
      this.comments = this.rawData.data;
      console.log(this.comments)
    })
    for(let i = 0; i < this.postByTag.length; i++){
      if(this.postByTag[i].id === id){
        this.picData1 = this.postByTag[i]
      }
    }
  }

  gotoTagPosts(tag: string){
    this.router.navigate([`/postByTag/${tag}`]);
    this.clear();
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

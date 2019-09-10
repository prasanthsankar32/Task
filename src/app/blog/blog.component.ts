import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  currentParameterId;
  constructor(public route :ActivatedRoute) { 
    this.currentParameterId=this.route.snapshot.paramMap.get('id')
  }

  ngOnInit() {
  }

}

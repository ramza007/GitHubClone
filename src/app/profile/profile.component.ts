import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any=[];
  repos:any=[];
  username:string;
  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    })
    this._githubService.getRepos().subscribe(repos => {
      //console.log(user);
      this.repos = repos;
    })
  }
  ngOnInit() {
  }
   searchUser(){
     this._githubService.updateUser(this.username);
     this._githubService.getUser().subscribe(user => {
       this.user = user;
     })
     //console.log('It works');
     this._githubService.getRepos().subscribe(repos => {
       //console.log(user);
       this.repos = repos;
     })

   }
}

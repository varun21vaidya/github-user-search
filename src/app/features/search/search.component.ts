import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  username: string = '';
  user: any={};
  loading:boolean=false;
  errorMessage:boolean=false;
  constructor(private githubService: GithubService, private stateService: StateService) {}

  searchUser() {
    this.errorMessage=false;
    this.loading=true;
    this.user={};
    this.githubService.getUser(this.username).subscribe({
      next: user => {
        this.user = user;
        this.stateService.addSearchHistory(this.username, user, true);
      },
      error: error => {
        this.errorMessage=true;
        this.loading=false;
        console.error(error);
        this.stateService.addSearchHistory(this.username, {}, false);
      },
      complete: ()=> {
        this.loading=false;
      }
  });
  }
  checkUser(){
    console.log(Object.keys(this.user).length)
    return Object.keys(this.user).length!==0
  }
}

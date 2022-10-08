import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public name: string = '';
  public password: string = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      console.log(param);
      this.name = param.name;
      this.password = param.password;
    });
  }


  gotoSignup(): void
  {
    this.router.navigate(['/auth/signup']);
  }

  
  gotoBookDetails(id: number, authorId: number): void
  {
    this.router.navigate(['/public/book-details', id, 'author', authorId], {queryParams: 
      {name: 'mahesh', email: 'mahesh@gmail.com'}
    });
  }

}

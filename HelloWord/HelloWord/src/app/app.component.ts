import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWord';
  date= new Date();

  constructor()
  {
    
  }

  onClickMe()
  {
    var i=1;
    console.log(i);
    localStorage.setItem('userToken', i.toString());
  }
}

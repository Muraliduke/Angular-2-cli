import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  router: Router;
  public myObj: any;

  constructor(router: Router){
      this.router = router;

      this.router.events.subscribe(event => {
  if(event.constructor.name === 'NavigationStart') {
    console.log('changed');
    this.myObj = {
                  'position': 'fixed',
                  'left': '0px',
                  'top': '0px',
                  'width': '100%',
                  'height': '100%',
                  'z-index': '9999',
                  'background': 'url(./images/Preloader_8.gif) center no-repeat #fff',
                  'opacity': '0.5'
        };
        setTimeout(() => {
    this.myObj.display = 'none';
  }, 3000);

        }
      });



  };

  ngOnInit() {
}

}

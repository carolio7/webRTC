import { Component, OnDestroy, OnInit } from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  salutationSub: Subscription;
  secondesSub: Subscription;
  secondes: number;
  constructor() { }

  ngOnInit(): void {
    const salutation = new Observable((observer) => {
      observer.next("hello");
      observer.next("world !");
      observer.complete();
    });

    const secondesObs = interval(1000);



    this.secondesSub = secondesObs.subscribe(
      (value : number) => {
        this.secondes = value;
      }
    );
  }

  ngOnDestroy(){
    this.secondesSub.unsubscribe();
  }

}

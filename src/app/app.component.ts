import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    
    constructor() { }
    
    secondes: number;
    counterSubscription: Subscription;
    
    ngOnInit() {
        const counter = interval(1000);
        this.counterSubscription = counter.subscribe(
            (value) => {
                this.secondes = value;
            },
            (error) => {
                console.log('Uh-oh, an error occurred! : ' + error);
            },
            () => {
                console.log('Observable complete!');
            }
        );
    }

    ngOnDestroy() {
        this.counterSubscription.unsubscribe();
    }
}

import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/credit';
import { CreditService } from 'src/app/credit.service';

@Component({ 
    templateUrl: 'credits.component.html',
    styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {
    credits: Credit[];
    constructor(private creditService: CreditService) { }
    ngOnInit(): void {
        this.credits = [];
        this.creditService.getCredits().subscribe(data => {
            data.forEach((credit) => {
                if(credit.attributionRequired == "y"){
                    this.credits.push(credit);
                }
            })
        });
    }
}
import { Component, OnInit } from '@angular/core';
import { Pillar } from '../pillar';
import { PillarService } from '../pillar.service';

@Component({
  selector: 'app-pillars',
  templateUrl: './pillars.component.html',
  styleUrls: ['./pillars.component.css']
})

export class PillarsComponent implements OnInit {
  pillars: Pillar[];

  constructor(private pillarService: PillarService) { }

  ngOnInit() {
    console.log(this.pillarService);
    this.pillars = [];

    this.pillarService.getPillars().subscribe(data => {
      this.pillars = data;
    })
  }
}
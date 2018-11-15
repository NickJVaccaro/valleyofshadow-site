import { Component, OnInit } from '@angular/core';
import { Screenshot } from '../screenshot';
import { ScreenshotService } from '../screenshot.service';

@Component({
  selector: 'app-screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.css']
})
export class ScreenshotsComponent implements OnInit {
  screenshots: Screenshot[];

  constructor(private screenshotService: ScreenshotService) { }

  ngOnInit() {
    this.screenshots = [];

    this.screenshotService.getScreenshots().subscribe(data => {
      this.screenshots = data;
    });
  }
}
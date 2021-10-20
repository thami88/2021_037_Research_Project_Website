import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  array = [1, 2, 3, 4];
  effect = 'scrollx';

  // card
  gridStyle = {
    width: 'auto',
    textAlign: 'center',
  };

  ngOnInit(): void {}

  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}

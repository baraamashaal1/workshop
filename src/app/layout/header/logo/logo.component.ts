import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import * as $ from 'jquery'

@Component({
  selector: 'link-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  public baseFontSize = 0;
  private $HTML = $(this.document).find('html');

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.baseFontSize = +this.$HTML.css('font-size').replace('px', '')
  }

  public setBaseFontSize(IsBase: boolean) {
    this.$HTML.css('font-size', IsBase ? this.baseFontSize : this.baseFontSize + this.baseFontSize * 12.5 / 100)
  }

}

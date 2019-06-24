import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() eventEmmiterFoeNav = new EventEmitter<any>();
  constructor(iconRegistry: MatIconRegistry,  sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }
}

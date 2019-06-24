import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  items: itemsType[];

  componentName: string;

  @Output() listItemClicked = new EventEmitter<any>();
  @Output() showHomeButtonEventEmitter = new EventEmitter<any>();

  private language: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}

interface itemsType{
    id: number;
    text: string;
    textEN: string;
    url: string;
}

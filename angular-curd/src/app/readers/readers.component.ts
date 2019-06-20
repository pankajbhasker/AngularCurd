import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../shared/rest-service.service';
@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.css']
})
export class ReadersComponent implements OnInit {
  reader: any = [];
  constructor( public restApi: RestServiceService ) { }
  ngOnInit() {
    this.loadReaders();
  }
  // Get readers list
  loadReaders() {
    return this.restApi.getReaders().subscribe((data: {}) => {
      this.reader = data;
    });
  }
  // Delete reader
  deletereader(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteReader(id).subscribe(data => {
        this.loadReaders();
      });
    }
  }
}

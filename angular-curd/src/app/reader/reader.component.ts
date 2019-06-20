import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestServiceService } from '../shared/rest-service.service';
@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  @Input() reader = { name: '', email: '', phone: 0 };
  constructor(
    public restApi: RestServiceService,
    public router: Router
  ) { }
  ngOnInit() { }

  addReader(reader): any {
    this.restApi.createReader(this.reader).subscribe((data: {}) => {
      this.router.navigate(['/readers']);
    });
  }
}


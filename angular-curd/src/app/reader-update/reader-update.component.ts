import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../shared/rest-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reader-update',
  templateUrl: './reader-update.component.html',
  styleUrls: ['./reader-update.component.css']
})
export class ReaderUpdateComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  readerData: any = {};
  constructor(
    public restApi: RestServiceService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.restApi.getReader(this.id).subscribe((data: {}) => {
      this.readerData = data;
    });
  }

  // Update employee data
  updateReader(readerData) {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi.updateReader(this.id, this.readerData).subscribe(data => {
        this.router.navigate(['/readers']);
      });
    }
  }
}

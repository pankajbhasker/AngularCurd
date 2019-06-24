import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RestServiceService } from '../shared/rest-service.service';


@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  @Input() reader = { name: '', email: '', phone: '' };
  angForm: FormGroup;
  title = 'Angular Curd and Validation using template and Reactive form';
  constructor(
    public restApi: RestServiceService,
    public router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  ngOnInit() { }

  addReader(reader): any {
    this.restApi.createReader(this.reader).subscribe((data: {}) => {
      this.router.navigate(['/readers']);
    });
  }
  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       email: ['', Validators.required ],
       phone: ['', Validators.required]
    });
  }

}

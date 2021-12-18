import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cuerpo-home',
  templateUrl: './cuerpo-home.component.html',
  styleUrls: ['./cuerpo-home.component.css']
})
export class CuerpoHomeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openxl(content: any) {
    this.modalService.open(content, {size:'lg'})
  }

}

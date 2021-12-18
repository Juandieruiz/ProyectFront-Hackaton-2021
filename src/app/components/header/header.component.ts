import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  displayLogin = true
  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content)
  }

  openxl(content: any) {
    this.modalService.open(content, {size:'lg'})
  }

  switchForm() {
    this.displayLogin = !this.displayLogin
  }

}


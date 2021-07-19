import { Component, OnInit } from '@angular/core';
import { PageService } from '../shared/page.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private pageService: PageService) {

  }

  ngOnInit(): void {
  }

  onClick() {
    this.pageService.toggleMenu();
  }

}

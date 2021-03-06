import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit {

  @Output('openMenu') openMenu: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  home(): void {
    this.router.navigate(['/home']);
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  menu(): void {
    this.openMenu.emit();
  }

}

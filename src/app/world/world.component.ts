import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../service/covid19.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css'],
})
export class WorldComponent implements OnInit {
  listWorldWide: any;
  constructor(private covid19Service: Covid19Service) {
    this.covid19Service.getListWorldWide().subscribe((response: any) => {
      this.listWorldWide = response
    });
  }

  ngOnInit(): void {}
}

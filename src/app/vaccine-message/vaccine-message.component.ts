import {Component, Input, OnInit} from '@angular/core';
import {Vaccine} from "../vaccine/vaccine";

@Component({
  selector: 'app-vaccine-message',
  templateUrl: './vaccine-message.component.html',
  styleUrls: ['./vaccine-message.component.css']
})
export class VaccineMessageComponent implements OnInit {

  @Input() vaccine: Vaccine;

  constructor() { }

  ngOnInit(): void {
  }

}

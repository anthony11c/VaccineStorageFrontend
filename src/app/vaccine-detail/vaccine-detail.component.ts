import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccineService } from '../service/vaccine.service';
import {Vaccine} from '../vaccine/vaccine';

@Component({
  selector: 'app-vaccine-detail',
  templateUrl: './vaccine-detail.component.html',
  styleUrls: ['./vaccine-detail.component.css']
})
export class VaccineDetailComponent implements OnInit {

  public vaccineList: Vaccine[];
  public vaccine: Vaccine;
  public id: String;
  private sub: any;

  constructor(private _ActivatedRoute : ActivatedRoute,
              private _router:Router,
              private _vaccineService:VaccineService) {
  }

  ngOnInit(): void {
    this.sub = this._ActivatedRoute.paramMap.subscribe( params => {
      console.log(params);
      this.id = params.get('id');
      console.log('Dohvaceni researchVaccineName => ' + this.id);

      this.getVaccineByManufacturerName();
      console.log(this.vaccine);
    });
  }

  getVaccineByManufacturerName(): void{
     this._vaccineService.getVaccineByManufacturerCompany(this.id).subscribe( vaccine =>
      this.vaccine = vaccine);
  }
}

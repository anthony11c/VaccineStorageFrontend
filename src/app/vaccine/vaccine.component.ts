import { Component, OnInit } from '@angular/core';
import {Vaccine} from './vaccine';
import { faSyringe } from '@fortawesome/free-solid-svg-icons';
import { VaccineService } from '../service/vaccine.service';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {

  vaccines: Vaccine[];
  selectedVaccine: Vaccine;
  icon = faSyringe;

  constructor(private vaccineService: VaccineService) { }

  ngOnInit(): void {
    this.getVaccines();
  }

  getVaccines(): void {
    this.vaccineService.getVaccines()
      .subscribe(vaccines => {
        console.log(vaccines);
        this.vaccines = vaccines;
      })
  }

  deleteVaccine(vaccine : Vaccine): void{
    this.vaccineService.deleteVaccine(vaccine.researchVaccineName).subscribe();
    this.vaccines = this.vaccines.filter(obj => obj !== vaccine);
  }

  addVaccine(manufacturerCompany: string, dosage: number, researchVaccineName: string, quantityInStorage: number, vaccineType: string): void{
    manufacturerCompany = manufacturerCompany.trim();
    researchVaccineName = researchVaccineName.trim();
    if(!manufacturerCompany || !researchVaccineName){ return; }

    this.vaccineService.addVaccine({manufacturerCompany, dosage, researchVaccineName, quantityInStorage, vaccineType} as Vaccine)
    .subscribe(vaccine => {
      this.vaccines.push(vaccine);
    });
  }

  onSelect(vaccine: Vaccine): void {
    this.selectedVaccine = vaccine;
  }
}

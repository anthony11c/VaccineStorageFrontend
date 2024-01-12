import { Component, Input, OnInit } from '@angular/core';
import { SideEffect } from './sideEffect';
import { SideEffectService } from '../service/side-effect.service';
import { Vaccine } from '../vaccine/vaccine';

@Component({
  selector: 'app-side-effect',
  templateUrl: './side-effect.component.html',
  styleUrls: ['./side-effect.component.css']
})
export class SideEffectComponent implements OnInit {

  
  @Input() selectedVaccine: Vaccine;
  sideEffects: SideEffect[];

  constructor(private SideEffectService: SideEffectService) { }

  ngOnInit(): void {
    this.getSideEffectsByVaccineResearchName();
  }

  getSideEffectsByVaccineResearchName(): void {
    this.SideEffectService.getSideEffectsByVaccineResearchName(this.selectedVaccine.researchVaccineName).subscribe(
      sideEffects => {
        console.log(sideEffects);
        this.sideEffects = sideEffects;
      }
    );
  }
}

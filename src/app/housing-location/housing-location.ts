import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housing-location';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './housing-location.html',
  styleUrls: ['./housing-location.css'],
})
export class HousingLocation {
  //input parameter
  housingLocation = input.required<HousingLocationInfo>();
}
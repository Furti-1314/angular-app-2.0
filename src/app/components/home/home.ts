import { ChangeDetectorRef, Component, inject } from '@angular/core';
import {HousingLocation} from '../housing-location/housing-location';
import { HousingLocationInfo } from 'libs/interfaces/housing-location';
import { HousingService } from 'src/app/core/services/housing.service'; 

@Component({
  selector: "app-home",
  standalone: true,
  imports: [HousingLocation],
  templateUrl: "./home.html",
  styleUrls: ["./home.css"],
})
export class HomeComponent {

  housingService = inject(HousingService);
  housingLocationList: HousingLocationInfo[] = [];
  filteredLocationList: HousingLocationInfo[] = [];
  
  // first fucntion to run so here is where we initialize our list of houses.
  constructor(changeDetectorRef: ChangeDetectorRef) {
   this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
        //We didn't use signals for our state, you have to notify Angular that a change happened that requires a synchronization. Call changeDetectorRef for that
        changeDetectorRef.markForCheck(); 
      }); 
  }

  filterResults(text: string) {
    if (text) {
      //retorn apenas as casas que contiverem a string colocada no filtro na sua property city.
      this.filteredLocationList = this.housingLocationList.filter((housingLocation) => housingLocation?.city.toLowerCase().includes(text.toLowerCase()));
    } else {
      this.filteredLocationList = this.housingLocationList;
    }
  }
}

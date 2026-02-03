import { Injectable } from '@angular/core';
import { HousingLocationInfo } from '../models/housing-location';

@Injectable({
  providedIn: "root",
})
export class HousingService {
  url = "http://localhost:3000/locations";

  /* getAllHousingLocations(): HousingLocationInfo[] {
    return this.housingLocationList;
  } */

  /* getHousingLocationById(id: number): HousingLocationInfo | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id,
    );
  } */

  // asynchronous code to make a GET request over http
  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const locationJson = await data.json();
    return locationJson[0] ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}

//type that defines data about a housing location
export type HousingLocationInfo = {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
  floor?: string
}

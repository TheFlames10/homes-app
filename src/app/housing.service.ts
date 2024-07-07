import {Injectable} from '@angular/core';
import {HousingLocation} from './housinglocation';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';
  baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    const locations = (await data.json()) ?? [];
    return this.replaceBaseUrl(locations);
  }
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    const location = (await data.json()) ?? {};
    return this.replaceBaseUrl([location])[0];
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    // tslint:disable-next-line
    console.log(firstName, lastName, email);
  }
  private replaceBaseUrl(locations: HousingLocation[]): HousingLocation[] {
    return locations.map(location => {
      if (location.photo) {
        location.photo = location.photo.replace('${this.baseUrl}', this.baseUrl);
      }
      return location;
    });
  }
}

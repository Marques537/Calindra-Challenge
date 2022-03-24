import ILocation from "../DTO/ILocation";

class CalculateDistancesService {
  CalculateAdressesDistance(AddressOne: ILocation, AddressTwo: ILocation) {
    const result = this.EuclideanDistance(AddressOne, AddressTwo);

    return result;
  }
  EuclideanDistance(AddressOne: ILocation, AddressTwo: ILocation): number {
    const latitude = Math.pow(AddressOne.latitude - AddressTwo.latitude, 2);
    const longitude = Math.pow(AddressOne.longitude - AddressTwo.longitude, 2);

    return Math.sqrt(latitude + longitude);
  }
}
export default CalculateDistancesService;

import GeolocationService from "../services/GeolocationService";
import ILocation from "../DTO/ILocation";
import IAddressDistanceCompare from "../DTO/IAddressDistanceCompare";
import CalculateAdressesDistance from "../services/CalculateDistancesService";

class CompareDistanceAdressesService {
  async compareDistanceAdresses(addresses: string[]) {
    let geolocationService = new GeolocationService();
    let calculateAdressesDistance = new CalculateAdressesDistance();

    let AddressesLocation: ILocation[];
    try {
      AddressesLocation = await geolocationService.getLatLng(addresses);
    } catch (error) {
      const errorResult = (error as Error).message;
      throw new Error(errorResult);
    }

    let i = 0;
    let j = 0;
    let comparatedAddresses: IAddressDistanceCompare[] = [];
    for (i = 0; i < AddressesLocation.length; i++) {
      for (j = i + 1; j < AddressesLocation.length; j++) {
        comparatedAddresses.push({
          addressName1: AddressesLocation[i].addressName,
          addressName2: AddressesLocation[j].addressName,
          distance: calculateAdressesDistance.CalculateAdressesDistance(
            AddressesLocation[i],
            AddressesLocation[j]
          ),
        });
      }
    }
    comparatedAddresses.sort(
      (
        FirstCompare: IAddressDistanceCompare,
        SecondCompare: IAddressDistanceCompare
      ) => {
        if (FirstCompare.distance > SecondCompare.distance) return 1;
        else if (FirstCompare.distance < SecondCompare.distance) return -1;
        else return 0;
      }
    );
    return comparatedAddresses;
  }
}
export default CompareDistanceAdressesService;

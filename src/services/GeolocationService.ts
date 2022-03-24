import { Client } from "@googlemaps/google-maps-services-js";
require("dotenv").config();

const client = new Client({});
let key: string;

class GeolocationService {
  checkEnv = () => {
    if (process.env.GOOGLE_API_KEY) {
      key = process.env.GOOGLE_API_KEY;
    } else {
      throw new Error("GOOGLE_API_KEY environment variable is not set");
    }
  };

  async getLatLng(address: string[]) {
    this.checkEnv();
    const response = address.map((address) =>
      client
        .geocode({
          params: {
            address: address,
            key: key,
          },
          timeout: 1000,
        })
        .then((response) => {
          if (response.data.status == "OK") {
            return response;
          } else if (response.data.status == "ZERO_RESULTS") {
            throw new Error("Invalid address provided");
          } else {
            throw new Error("Geocoding query error");
          }
        })
    );

    const Addresses = await Promise.all(response);

    return Addresses.map((addr) => ({
      addressName: addr.data.results[0].formatted_address,
      latitude: addr.data.results[0].geometry.location.lat,
      longitude: addr.data.results[0].geometry.location.lng,
    }));
  }
}
export default GeolocationService;

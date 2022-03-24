import { Client } from "@googlemaps/google-maps-services-js";
require('dotenv').config()

const client = new Client({});
let key: string

function checkEnv(){
  if (process.env.GOOGLE_API_KEY) {
    key = process.env.GOOGLE_API_KEY
  } else {
    throw new Error("GOOGLE_API_KEY environment variable is not set")
  }
}

async function getLatLng(address: string[]){
  checkEnv();

  const addressesReq = address.map(address =>

  client
  .geocode({
    params: {
      address: address,
      key: key,
    },
    timeout: 1000,
  })
  );
  const result = await Promise.all(addressesReq);
  return result.map(res => ({ address: res.data.results[0].formatted_address, location: res.data.results[0].geometry.location }) );
}
export default getLatLng;
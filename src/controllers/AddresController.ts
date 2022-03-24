import { Request, Response } from 'express';
import getLatLng from '../service/GeolocationService';
class Address {
  
  async GetDistance(request: Request, response: Response){
    const addresses: string[] = request.body.Addresses;

    const Addresseslocation = await getLatLng(addresses);

   return response.json(Addresseslocation[0]);
  }
}

export default Address;
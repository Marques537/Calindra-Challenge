import { Request, Response } from "express";
import IAddressDistanceCompare from "../DTO/IAddressDistanceCompare";
import CompareDistanceAdressesService from "../services/CompareDistanceAdressesService";

class Address {
  async GetDistance(request: Request, response: Response) {
    const compareDistanceAdressesService = new CompareDistanceAdressesService();
    const addresses: string[] = request.body.Addresses;

    if (addresses.length < 2) {
      return response
        .status(404)
        .json({ message: "insufficient number of addresses was provided" });
    }
    try {
      const addressComparated: IAddressDistanceCompare[] =
        await compareDistanceAdressesService.compareDistanceAdresses(addresses);
      return response.json(addressComparated);
    } catch (error) {
      const errorResult = (error as Error).message;
      return response.status(404).json({ messsage: errorResult });
    }
  }
}
export default Address;

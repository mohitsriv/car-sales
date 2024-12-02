export interface CarListing {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  location: string;
  image: string;
  fuelType: string;
  transmission: string;
  bodyType: string;
  exteriorColor: string;
  vin: string;
  description: string;
  photos: string[];
  // Auction-specific fields
  isAuction?: boolean;
  auctionEndTime?: string;
  startingPrice?: number;
  currentBid?: number;
  numberOfBids?: number;
  highestBidder?: string;
  // id: number;
  // make: string;
  // model: string;
  // year: number;
  // price: number;
  // mileage: number;
  // location: string;
  // image: string;
  // fuelType: string;
  // transmission: string;
  // bodyType: string;
  // exteriorColor: string;
  // vin: string;
}
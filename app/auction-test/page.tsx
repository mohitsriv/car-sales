"use client";

import { useState } from "react";
import { CarDetail } from "@/components/cars/car-detail";

// Mock data for testing auction functionality
const MOCK_AUCTION_CAR = {
  id: "test-auction-1",
  make: "Tesla",
  model: "Model S Plaid",
  year: 2023,
  price: 125000,
  mileage: 1500,
  location: "Silicon Valley, CA",
  image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=500",
  fuelType: "Electric",
  transmission: "Automatic",
  bodyType: "Sedan",
  exteriorColor: "Midnight Silver",
  vin: "TEST123AUCTION",
  description: "Experience the future of automotive performance with this Tesla Model S Plaid. This vehicle represents the pinnacle of electric vehicle technology, featuring unprecedented acceleration, range, and luxury.",
  photos: [
    "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1621310395444-18c08ab7de02?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1617527023962-6b04d476eea3?auto=format&fit=crop&q=80&w=1200"
  ],
  // Auction-specific properties
  isAuction: true,
  currentBid: 125000,
  startingPrice: 120000,
  auctionEndTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours from now
  numberOfBids: 5,
  highestBidder: "User123"
};

export default function AuctionTestPage() {
  const [car, setCar] = useState(MOCK_AUCTION_CAR);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Auction Test Page</h1>
        <CarDetail car={car} />
      </div>
    </div>
  );
}
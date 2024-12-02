"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, DollarSign, Users } from "lucide-react";

interface AuctionListingProps {
  carId: string;
  currentPrice: number;
  startPrice: number;
  endTime: Date;
  numberOfBids: number;
  highestBidder?: string;
  onPlaceBid: (amount: number) => void;
}

export function AuctionListing({
  carId,
  currentPrice,
  startPrice,
  endTime,
  numberOfBids,
  highestBidder,
  onPlaceBid,
}: AuctionListingProps) {
  const [bidAmount, setBidAmount] = useState(currentPrice + 100);
  const [timeLeft, setTimeLeft] = useState(""); // You would implement a proper countdown timer

  const handleSubmitBid = (e: React.FormEvent) => {
    e.preventDefault();
    onPlaceBid(bidAmount);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Auction Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Price Information */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Current Bid</p>
              <p className="text-2xl font-bold text-primary">
                ${currentPrice.toLocaleString()}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Starting Price</p>
              <p className="text-xl">
                ${startPrice.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Auction Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span>{numberOfBids} bids</span>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="h-5 w-5 text-muted-foreground" />
              <span>{timeLeft || "Calculating..."}</span>
            </div>
          </div>

          {/* Highest Bidder */}
          {highestBidder && (
            <div className="text-sm text-muted-foreground">
              Highest bidder: {highestBidder}
            </div>
          )}

          {/* Bid Form */}
          <form onSubmit={handleSubmitBid} className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  type="number"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(Number(e.target.value))}
                  min={currentPrice + 100}
                  step={100}
                  placeholder="Enter bid amount"
                />
              </div>
              <Button type="submit">
                <DollarSign className="h-4 w-4 mr-2" />
                Place Bid
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Minimum bid increment: $100
            </p>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
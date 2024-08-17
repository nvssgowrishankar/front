import { Cab } from "./cab";

export interface Driver {
    driverId: number; // Assuming driverId is the unique identifier
    username: string;
    password: string;
    rating: number;
    cab?: Cab; // Optional, if a driver can have an associated cab
  }
  
export interface Cab {
    id?: number; // Optional for creation
    model: string;
    price: number;
    driverId: number; // Ensure this is included
    carType?: string; // Add optional properties if they exist
    perKmRate?: number; // Add optional properties if they exist
  }
  
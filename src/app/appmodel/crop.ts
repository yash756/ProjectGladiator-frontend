export class Crop {
    cropName: string;
    cropType: string;
    fertilizerType: string;
    quantity: string;
    basePrice: number;
    // startDate: Date;
    // endDate: Date;
    soilPh: number;
    bidCutoffTime: number;
    farmer: Farmer = new Farmer();
  
  }
  export class Farmer{
    id: number;

  }
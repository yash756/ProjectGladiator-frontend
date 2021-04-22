export class Insurance {
    cropName: string;
    area: number;
    season: string;
    year: Date;
    farmer: Farmer = new Farmer();
  }
  
  export class Farmer {
    id: number;
  }
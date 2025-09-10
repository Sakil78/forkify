declare module 'fractional' {
  export class Fraction {
    constructor(numerator: number | string, denominator?: number | string);
    numerator: number;
    denominator: number;
    toString(): string;
    // Add other methods/properties as needed
  }
}

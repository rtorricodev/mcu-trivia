import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  getRandomNumber(maxNumber: number): number {
    return Math.floor(Math.random() * maxNumber);
  }
}

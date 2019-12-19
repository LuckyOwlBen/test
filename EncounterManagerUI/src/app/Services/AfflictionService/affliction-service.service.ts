import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AfflictionServiceService {

  constructor() { }
  condition: string;
  saved: boolean;

  getCondition(): string{
    return this.condition;
  }

  setCondition(condition: string){
    this.condition = condition;
  }

  getSaved(): boolean{
    return this.saved;
  }

  setSaved(saved: boolean){
    this.saved = saved;
  }

}

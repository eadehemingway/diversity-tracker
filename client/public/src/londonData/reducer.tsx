import { GenderData, RaceData } from "../commonTypes";
import { londonGenderData, londonRaceData } from "./data";

export class LondonDataState {
    constructor(
       public gender: GenderData = londonGenderData,
       public race: RaceData = londonRaceData
    ){}
}

export function londonDataReducer(
        state = new LondonDataState(),
        action
      ) {
        switch (action.type) {
          default :
          return state
        }
}
      
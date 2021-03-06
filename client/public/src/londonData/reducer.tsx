import { GenderData, RaceData } from "../commonTypes";
import { londonGenderData, londonRaceData } from "./data";

export class LondonDataState {
  constructor(
    public gender: GenderData = londonGenderData,
    public race: RaceData = londonRaceData
  ) {}
}

export const londonDataReducer = (state = new LondonDataState(), action) =>
  state;

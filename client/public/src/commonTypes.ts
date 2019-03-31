import { LondonDataState } from "./londonData/reducer";
import { OurCompanyDataState } from "./ourCompanyData/reducer";
import { UserCompanyDataState } from "./userCompanyData/reducer";

export interface GenderData {
  Men?: number;
  Women?: number;
  Other?: number;
}

export interface RaceData {
  White?: number;
  Mixed?: number;
  Asian?: number;
  Black?: number;
  Other?: number;
  NonWhite?: number;
}

export interface AppState {
  londonData: LondonDataState;
  ourCompanyData: OurCompanyDataState;
  userCompanyData: UserCompanyDataState;
}

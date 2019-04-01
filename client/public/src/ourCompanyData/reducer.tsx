import { GenderData, RaceData } from "../commonTypes";
import { staffDemographicOverTimeData, hiringStatisticsData } from "./data";

export interface TemplateDonut {
  gender: { t: number };
  race: { t: number };
  title: string;
  uuid: string;
}

export interface TemplateDonutsForFuture {
  june19: TemplateDonut;
  jan20: TemplateDonut;
  june20: TemplateDonut;
  jan21: TemplateDonut;
  june21: TemplateDonut;
  jan22: TemplateDonut;
  june22: TemplateDonut;
  jan23: TemplateDonut;
  june23: TemplateDonut;
}
interface StaffDemographic {
  gender: GenderData;
  race: RaceData;
  title: string;
  uuid: string;
}

export interface StaffDemographicPastData {
  jan18: StaffDemographic;
  jun18: StaffDemographic;
  jan19: StaffDemographic;
}

export interface StaffDemographicOverTime {
  staffDemographicPastData: StaffDemographicPastData;
  templateDonuts: TemplateDonutsForFuture;
}
export interface GenderHireStats {
  applications: { Men: number; Women: number };
  hired: { Men: number; Women: number };
  applicationTargets: { Men: number; Women: number };
}

export interface RaceHireStats {
  applications: { White: number; NonWhite?: number };
  hired: { White: number; NonWhite?: number };
  applicationTargets: { White: number; NonWhite?: number };
}
interface OurHiringStatistics {
  gender: { tech: GenderHireStats; nonTech: GenderHireStats };
  race: { tech: RaceHireStats; nonTech: RaceHireStats };
}

export class OurCompanyDataState {
  constructor(
    public staffDemographicOverTime: StaffDemographicOverTime = staffDemographicOverTimeData,
    public ourHiringStatistics: OurHiringStatistics = hiringStatisticsData
  ) {}
}

export const ourCompanyDataReducer = (state = new OurCompanyDataState()) =>
  state;

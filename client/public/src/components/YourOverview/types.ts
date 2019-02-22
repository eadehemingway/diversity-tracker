

export interface FormProps {

    labels: any[];
    updateUserData: (value:number, key:string, diversityCategory:string)=> void
}

export enum donutType {
    gender = 'gender',
    race = 'race'
}
export interface DonutProps {
    donutType: donutType;
    donutName:string;
    className?: string;
    radius: number;
    data: {}
    template:boolean
    padAngle: number
    target?: boolean;

}

export interface DonutState {
    data: any [];
    prevData: any[];
    padAngle: number;
    raceColors: string[];
    genderColors: string[];
    templateColors: string[];
    targetColors: string[];

}

export interface GenderTileState {
    Men: number;
    Women: number;
    Other: number;
}


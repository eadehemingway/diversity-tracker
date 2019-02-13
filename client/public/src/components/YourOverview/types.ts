

export interface FormProps {
    title: string;
    labels: any[];
    handleChange: (value:number, key:string)=> void
}

export enum donutType {
    gender = 'gender',
    race = 'race'
}
export interface DonutProps {
    firstLabel: string;
    secondLabel: string;
    thirdLabel: string;
    firstAmount: number;
    secondAmount: number;
    thirdAmount: number;
    londonDonut:Boolean;
    donutType: donutType;
    donutName:string;
    className?: string;
    radius: number;


}

export interface DonutState {
    data: any [];
    prevData: any[];

}

export interface GenderTileState {
    Men: number;
    Women: number;
    Other: number;
}


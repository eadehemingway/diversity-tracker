

export interface FormProps {
    title: string;
    labels: any[];
    handleChange: (value:number, key:string)=> void
}

export interface DonutProps {
    firstLabel: string;
    secondLabel: string;
    thirdLabel: string;
    tileName: string;
    firstAmount: number;
    secondAmount: number;
    thirdAmount: number;


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


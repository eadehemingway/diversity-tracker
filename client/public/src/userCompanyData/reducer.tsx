import { GenderData, RaceData } from "../commonTypes";


export class UserCompanyDataState {
    constructor(
        public gender: GenderData = {Men:0, Women:0, Other:0},
        public race: RaceData = {White:0, Mixed:0, Asian: 0, Black: 0, Other:0}
    ){}
}



export function userCompanyDataReducer(
        state = new UserCompanyDataState(),
        action
      ) {
        switch (action.type) {
          case "UpdateUserDataAction": {
             const updatedState = {...state, 
                [action.diversityCategory]: {      
                    ...state[action.diversityCategory],
                    [action.label]: action.value
                }
                }

            return updatedState
          }
        default :
        return state
    }
}
      
import { GenderData, RaceData } from "../commonTypes";










interface userCompanyDataState {
    gender: GenderData,
    race: RaceData
}


    export function userCompanyDataReducer(
        state:userCompanyDataState = null,
        action
      ) {
   
        switch (action.type) {
        //   case CalendarActions.CalendarNext: {

      
        //   }
          default :
          return state
        }
    }
      
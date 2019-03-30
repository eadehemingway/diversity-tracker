import { GenderData, RaceData } from "../commonTypes";






interface londonDataState {
    gender: GenderData,
    race: RaceData
}



    export function londonDataReducer(
        state:londonDataState = null,
        action
      ) {
   
        switch (action.type) {
        //   case CalendarActions.CalendarNext: {

      
        //   }
          default :
          return state
        }
    }
      
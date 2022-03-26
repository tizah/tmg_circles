import {ActionType, Circle} from './types'

export const initialState: any = {
    email: null,
    circles: null,
    address: undefined,
    chainId: undefined
  }




  export function reducer(state: Circle, action: ActionType): Circle {
    switch (action.type) {
      case 'CREATE_CIRCLE':
        return {
          ...state,
          circleName: action.circleName,
        circleMembers: action.circleMembers,
        fundingGoal: action.fundingGoal,
        circleMission: action.circleMission,
        circleImage: action.circleImage,
        userName: action.userName,
        Address: action.Address,
        City: action.City,
        Country: action.Country,
        ZipCode: action.ZipCode,
        IsCircleAdmin: action.IsCircleAdmin
        }
      case 'JOIN_CIRCLE':
        return {
          ...state,
          userName: action.userName,
          circleName: action.circleName
        }
      default:
        throw new Error()
    }
  }
  
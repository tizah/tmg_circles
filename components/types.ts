export type Circle = {
    circleName: string
    circleMembers?: []
    fundingGoal: number
    circleMission: string
    circleImage?: string
    userName: string
    Address: string
    City: string
    Country: string
    ZipCode: string
    IsCircleAdmin: boolean
}


export type ActionType =
    | {
        type: 'CREATE_CIRCLE'
        circleName: Circle['circleName']
        circleMembers?: Circle['circleMembers']
        fundingGoal: Circle['fundingGoal']
        circleMission: Circle['circleMission']
        circleImage?: Circle['circleImage']
        userName: Circle['userName']
        Address: Circle['Address']
        City: Circle['City']
        Country: Circle['Country']
        ZipCode: Circle['ZipCode']
        IsCircleAdmin: Circle['IsCircleAdmin']
      }
    | {
        type: 'JOIN_CIRCLE'
        circleName: Circle['circleName']
        userName: Circle['userName']
      }
   
  
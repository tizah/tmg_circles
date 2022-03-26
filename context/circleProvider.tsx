import React, {useState, useReducer} from 'react';
import Context from './circleContext';
import {Circle} from '../components/types'
import { initialState, reducer} from '../components/reducer'
import { ActionType } from '../components/types';

const CircleProvider = ({ children }: any) => {
    const [globalState, dispatch] = useReducer(reducer, initialState)
    const [state, setState] = useState<Circle>()



    const createCircle = async (circle: Circle) => {
      dispatch({
        type: 'CREATE_CIRCLE',
        circleName: circle.circleName,
        circleMembers: circle.circleMembers,
        fundingGoal: circle.fundingGoal,
        circleMission: circle.circleMission,
        circleImage: circle.circleImage,
        userName: circle.userName,
        Address: circle.Address,
        City: circle.City,
        Country: circle.Country,
        ZipCode: circle.ZipCode,
        IsCircleAdmin: circle.IsCircleAdmin
      })
    }

    const joinCircle = async (circle: Circle) => {
        dispatch({  
            type: 'JOIN_CIRCLE',
            userName: circle.userName,
            circleName: circle.circleName
         })
    }

     return (
      <Context.Provider value={{ globalState, createCircle, joinCircle }}>
        {children}
      </Context.Provider>
    );
  };

  export default CircleProvider;
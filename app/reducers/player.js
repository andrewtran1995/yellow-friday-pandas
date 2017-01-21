// @flow
import {LOAD_FILE} from '../actions/player'

type actionType = {
  type: string
};

export default function player(state: number = 0, action: actionType) {
  switch(action.type) {
    case LOAD_FILE:
      return state = 1;
    default:
      return state = 0;
  }
}

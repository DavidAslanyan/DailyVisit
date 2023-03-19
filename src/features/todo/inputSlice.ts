interface InputState {
  text: string;
};

interface SelectedInput {
  input: {
    text: string;
  }
};

interface ReadInputAction {
  type: typeof READ_INPUT;
  payload: {
    text: string;
  };
};

type InputAction = ReadInputAction;

export const initialInputState: InputState = {
  text: ""
};

const READ_INPUT = 'READ_INPUT';

export const inputReducer = (state = initialInputState, action: InputAction): InputState => {
  switch (action.type) {
    case READ_INPUT:
      return {
        ...state,
        text: action.payload.text
      }
    default:
      return state;
  }
};


export function selectInput(state: SelectedInput ) {
  return state.input.text
};

export function readInput(input: string) {
  return (
    {
      type: READ_INPUT,
      payload: {
        text: input
      }
    }
  )
};
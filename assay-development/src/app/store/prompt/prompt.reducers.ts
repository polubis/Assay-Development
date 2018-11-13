import * as PromptActions from './prompt.actions';
import { Prompt } from "src/app/models/Prompt";


export interface State {
  prompts: Prompt[];
};

const initialState: State = {
    prompts: []
};

export function promptReducer(state = initialState, action: PromptActions.PromptActions){
    switch(action.type){
        case PromptActions.SET_PROMPTS:
            return { 
                ...state,
                prompts: [...state.prompts, ...action.payload]
            }
        case PromptActions.REMOVE_PROMPT:
            const currentPrompts = [...state.prompts];
            const indexOfPromptToDelete = currentPrompts.findIndex(prompt => prompt.domain === action.payload.domain);
            currentPrompts.splice(indexOfPromptToDelete, 1);
            return {
                ...state, 
                prompts: currentPrompts
            }
        default:
            return state;
    }
}
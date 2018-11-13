import { Action } from "@ngrx/store";
import { Prompt } from "src/app/models/Prompt";

export const SET_PROMPTS = "[Prompt] SET_PROMPTS";
export const REMOVE_PROMPT = "[Prompt] REMOVE_PROMPT";

export const TRY_REMOVE_PROMPT = "[Prompt] TRY_REMOVE_PROMPT";
export const CHANGE_PROMPTS = "[Prompt] CHANGE_PROMPTS";

export class SetPrompts implements Action{
    readonly type = SET_PROMPTS;
    constructor(public payload: Prompt[]){}
}

export class RemovePrompt implements Action{
    readonly type = REMOVE_PROMPT;
    constructor(public payload: Prompt){}
}

export class TryRemovePrompt implements Action{
    readonly type = TRY_REMOVE_PROMPT;
    constructor(public payload: string){}
}

export class ChangePrompts implements Action{
    readonly type = CHANGE_PROMPTS;
    constructor(public payload: Prompt[]){}
}

export type PromptActions = SetPrompts | RemovePrompt | ChangePrompts;
export interface ValidationConfig {
    required?: boolean;
    minLength?: number,
    maxLength?: number,
    regex?: string
}

export interface FormConfig {
    mode: string,
    type: string,
    label?: string,
    placeholder: "",
    inputContainerClass?: string,
    inputClass?: string;
    icon?: string,
    minWidth?: string,
    validationConfig?: ValidationConfig,
    initialData?: any[],
    initialValue?: any 
}

export class InputState {
    constructor(public value: any, public isAllErrorsResolved: boolean = true, errors: { isResolved: boolean, content: string }[], 
        public data?: any){}
}

export const filterForm: FormConfig[] = [
    {mode: "data-list-select", type: "text", placeholder: "choose category...", inputContainerClass: "margin-right"},
    {mode: "normal", type: "text", placeholder: "start typing...", inputContainerClass: "normal", icon: "search", minWidth: "300px", validationConfig: {
            minLength: 3, maxLength: 20, required: true
        }
    }
]
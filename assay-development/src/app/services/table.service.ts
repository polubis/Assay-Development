export class TableService{
    types: Table = {
        "experiment": {
            header: "Experiments",
            subHeader: "click into experiment to see details", 
            initialPageLimit: 5,
            tableHeaders: ["Experiment ID", "Experiment Name", "Lead Researcher", "Objective", "Study Design", "Expiration Date", "Status Date", "# Slides"]
        },
        "project": {
            header: "Experiments",
            subHeader: "click into experiment to see details", 
            initialPageLimit: 5,
            tableHeaders: ["Project ID", "Project Name", "WBS #", "Project Funding", "Project Lead", "Project Status", "Status Date", "# Studies"]
            
        }
    }
}

export interface Table{
    [key: string]: {
        header: string,
        subHeader: string, 
        initialPageLimit: number,
        tableHeaders: string[]
    }
}
export class TableService{
    types: Table = {
        "project": {
            header: "Projects",
            subHeader: "click on row to get studies", 
            initialPageLimit: 5,
            tableHeaders: ["Project ID", "Project Name", "WBS #", "Project Funding", "Project Lead", "Project Status", "Status Date", "# Studies"],
        },
        "study": {
            header: "Studies",
            subHeader: "click on row to get experiments", 
            initialPageLimit: 5,
            tableHeaders: ["Study ID", "Study Name", "Lead Researcher", "Start Date", "Study Type", "Study Status", "# Exp"],
            
        },
        "experiment": {
            header: "Experiments",
            subHeader: "click into experiment to see details", 
            initialPageLimit: 5,
            tableHeaders: ["Experiment ID", "Experiment Name", "Lead Researcher", "Objective", "Study Design", "Expiration Date", "Status Date", "# Slides"],
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
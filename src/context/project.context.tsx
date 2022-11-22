import { createContext, ReactNode, useContext, useState } from "react";

interface ProjectsProviderProps{
    children: ReactNode
}

interface Category{
    id: string,
    name: string
}

interface ProjectsContextData{
    categories: Category[],
    addCategories: (value:Category[]) => void
}
const ProjectsContext = createContext<ProjectsContextData>({} as ProjectsContextData)

export function ProjectsProvider({children}:ProjectsProviderProps){
    const [categories, setCategories] = useState<Category[]>([])
    const addCategories = (values: Category[]) => {
        setCategories(values)
    }
    return(
        <ProjectsContext.Provider value={{categories, addCategories}}>
            {children}
        </ProjectsContext.Provider>
    )
}

export function useProjects(){
    const projectContext = useContext(ProjectsContext);
    
    return projectContext
}
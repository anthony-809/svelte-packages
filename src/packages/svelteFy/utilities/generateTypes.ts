import { browser,dev } from "$app/environment";
import TFromJ from "./TFromJ";

/** Auto generate types | Only run on dev mode and server */
export async function generateTypes(data:any,typeName:string) {
    /** Capitalize string */
    const capitalize = (data:string)=> data.charAt(0).toUpperCase()+data.slice(1)

    // Only run on dev mode and server
    if(dev && !browser){
        typeName = capitalize(typeName)
        const typeData = new TFromJ(data,typeName).get()
        const fs = await import("fs")
        const path = await import("path")
        const typesPath = `${path.dirname(new URL(import.meta.url).pathname)}`.replace("/utilities","/types/generated.ts")
        const typesPathData = fs.readFileSync(typesPath).toString()
        // check if type exists
        const typeExists = typesPathData.includes(`//TFromJ:${typeName}:start`) && typesPathData.includes(`//TFromJ:${typeName}:end`)
        if(typeExists){
            const oldData = typesPathData.split(`//TFromJ:${typeName}:start`)[1].split(`//TFromJ:${typeName}:end`)[0]
            const newData = typeData.split(`//TFromJ:${typeName}:start`)[1].split(`//TFromJ:${typeName}:end`)[0]
            const newTypesData = typesPathData.replace(oldData,newData)        
            fs.writeFileSync(typesPath,newTypesData)
        }else fs.appendFileSync(typesPath,typeData)
    }
}
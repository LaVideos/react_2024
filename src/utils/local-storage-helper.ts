export const retriveLocalStorage = <T,>(key:string)=>{
    const pairJSON = localStorage.getItem(key)||"";
    if(!pairJSON){
        return pairJSON as T
    }
    const token = JSON.parse(pairJSON)
    return token as T
}

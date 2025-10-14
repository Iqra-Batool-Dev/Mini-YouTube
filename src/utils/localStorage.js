export const loadFromLocalStorage = ()=>{
try {
    const savedState = JSON.parse(localStorage.getItem('userState'))
    if(savedState === null ) return undefined
    return savedState
} catch (error) {
    console.warn('there is no value in local storage', error)
    return undefined
}

}


export const saveToLocalStorage =(state)=>{
    try {
        localStorage.setItem('userState', JSON.stringify(state))
        console.log('storeState is', state)
    } catch (error) {
        console.warn('failed to save the state in localStorage', error)   
    }
}

export const removeFromLocalStorage = ()=>{
    localStorage.removeItem('userState')
}
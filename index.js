// Code your solution here
let findMatching = (drivers, string) => {
    let match = drivers.filter(driver => {
        let driverCap = driver.charAt(0).toUpperCase() + driver.slice(1)
        return driverCap === string
    })
    return match
}

let fuzzyMatch = (drivers, string) => {
    // let driversLow =  drivers.map(el => el.toLowerCase().slice(0, string.length))
    // debugger
    let match = drivers.filter(driver => {
        // debugger
        return driver.toLowerCase().slice(0, string.length) === string.toLowerCase()     
    })
    return match
}

let matchName = (drivers, string) => {
    let match = drivers.filter(driver => {
        // debugger
        return driver.name === string
        
    })
    return match 
    
}
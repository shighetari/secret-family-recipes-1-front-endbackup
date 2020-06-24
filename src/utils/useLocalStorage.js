import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        //If the key exists in local storage then return it to storedValue
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key))
        }

        return initialValue
    })
    //Otherwise set the key to the initial value and return it to storedvalue
    const setValue = value => {
        //Store the value into state
        setStoredValue(value)
        console.log(value) //just checking
        //Store the value into local storage
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue]
}
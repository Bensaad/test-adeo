import data from './data/data.js'
import {isEmpty} from './utils.js'

// This function filters out every animal that does not match the string pattern
const removeNonMatching = (searchedStr, person) => {
    return person.animals.reduce((animals,animal) => {
        if (animal.name.includes(searchedStr)) animals.push(animal)
        return animals
    },[])
}

const filterAnimals = (people,searchedStr) => {
    return people.filter(q => {
        let  person = q 
        person.animals = removeNonMatching(searchedStr, q)

        // The 'animals' entry will be removed if there is nothing left inside
        return isEmpty(person.animals)
    })
}
export const filter = (searchedStr) => {
    const newList = data.filter(q => {
        let newCountry = q
        newCountry.people = filterAnimals(q.people,searchedStr)

        // The 'people' entry will be removed if there is nothing left inside
        return isEmpty(newCountry.people)
    });

    // prints out the filtered list if there is any match
    console.log((!isEmpty(newList)) ? 'Nothing found' : JSON.stringify(newList))
    return (!isEmpty(newList)) ? 'Nothing found' : JSON.stringify(newList)
}

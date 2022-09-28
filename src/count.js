import data from './data/data.js'

const countAnimals = (people) => {
    return people.map((data) => ({...data,name: `${data.name} [${data.animals.length}]`}))
}
export const count = () => {
    const newList = data.map((country) => ({...country,name:`${country.name} [${country.people.length}]`,people:countAnimals(country.people)}))
    console.log(JSON.stringify(newList))
    return JSON.stringify(newList)
}
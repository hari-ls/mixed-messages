/*
Mixed Messages - What should I do?
By H. R. Shah
Brief: This program will print a random message on execution. Each time the program will print out a message for Work, Chores or Trip
*/

// initialising data
const workTasks = ['bookkeeping', 'follow-ups', 'scheduling'] // ex. you can work on your schedule
const choresToDo = ['dishes', 'cleaning', 'laundry'] // ex. you can do the dishes
const tripDestinations = ['the beach', 'a bike trail', 'the mountains'] // ex. you can go to the mountains

const selector = [{   key : 'work', value : workTasks   }, {   key : 'chores', value : choresToDo  }, {   key : 'trip', value : tripDestinations  }]

// random number generator
const getRandomInt = num => Math.floor(Math.random() * num)

// topic selection
const getTopic = () => selector[getRandomInt(3)]

// printing message
const printMessage = () => {
    let selection = getTopic()
    
    let topic = selection.key
    let data = selection.value
    let pick = data[getRandomInt(data.length)]
    
    if (topic === 'work') {
        console.log('You can work on ' + pick)
    } else if (topic === 'chores') {
        console.log('You can do ' + pick)
    } else if (topic === 'trip') {
        console.log('You can go to ' + pick)
    }
}
printMessage()
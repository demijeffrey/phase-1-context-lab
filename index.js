/* Your Code Here */

function createEmployeeRecord ([firstName, familyName, title, payPerHour]) {
    const employeeRecord = {}
    const array = [firstName, familyName, title, payPerHour]
    employeeRecord.firstName = array[0]
    employeeRecord.familyName = array[1]
    employeeRecord.title = array[2]
    employeeRecord.payPerHour = array[3]
    employeeRecord.timeInEvents = []
    employeeRecord.timeOutEvents = []

    return employeeRecord
}

function createEmployeeRecords (arrayOfArrays) {
    return arrayOfArrays.map(array => createEmployeeRecord(array))
}

function createTimeInEvent (dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    const timeObj = {
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date
    }
    this.timeInEvents.push(timeObj)
    return this
}

function createTimeOutEvent (dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    const timeObj = {
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
    }
    this.timeOutEvents.push(timeObj)
    return this
}

function hoursWorkedOnDate (date) {
    const timeIn = this.timeInEvents.filter(obj => obj.date === date).map(obj => obj.hour)
    const timeOut = this.timeOutEvents.filter(obj => obj.date === date).map(obj => obj.hour)
    return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate (date) {
    const wagesForDay = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return wagesForDay
}

function findEmployeeByFirstName (srcArray, firstName) {
    for(const record of srcArray){
        if(record.firstName === firstName) {
            return record
        }
    }
}

function calculatePayroll (srcArray) {
    const allWages = []
    for(const record of srcArray) {
        allWages.push(allWagesFor.call(record))
    }
    return allWages.reduce((num1, num2) => num1 + num2, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


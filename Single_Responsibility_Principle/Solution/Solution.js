//Here we have only one reason to edit the class i.e. the trackCalorie function
//We have imported the print function from another module.

import print from "./Printer.js"

class CalorieTracker{
    constructor(maxCalories){
        this.maxCalories = maxCalories
        this.currentCalories = 0
    }

    trackCalories(calorieCount){
        this.currentCalories += calorieCount
        if(this.currentCalories > this.maxCalories){
            print("Above Limit")
        }else print("Under Limit")
    }
}
 
CalorieTracker = new CalorieTracker(2000)
CalorieTracker.trackCalories(500)
CalorieTracker.trackCalories(1000)
CalorieTracker.trackCalories(700)
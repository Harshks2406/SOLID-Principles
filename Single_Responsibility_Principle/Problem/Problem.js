class CalorieTracker{
    constructor(maxCalories){
        this.maxCalories = maxCalories
        this.currentCalories = 0
    }

    trackCalories(calorieCount){
        this.currentCalories += calorieCount
        if(this.currentCalories > this.maxCalories){
            this.AboveLimitLog()
        }else this.UnderLimitLog()
    }
    AboveLimitLog(){
        console.log("Max Calorie Reached")
    }
    UnderLimitLog(){
        console.log("Under Limit")
    }
}

CalorieTracker = new CalorieTracker(2000)
CalorieTracker.trackCalories(500)
CalorieTracker.trackCalories(1000)
CalorieTracker.trackCalories(700)
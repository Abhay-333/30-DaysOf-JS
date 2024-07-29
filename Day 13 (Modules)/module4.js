const user = {
    userName: "Abhay",
    userAge:19,
    greetings(){
        console.log(`Hello!, I am ${this.userName}, I am ${this.userAge}`)
    },   

    Birthday(){
        this.userAge +=1
        console.log(`Happy Birthday! ${this.userName}, You are now ${this.userAge}`)
    }

}   

export default user
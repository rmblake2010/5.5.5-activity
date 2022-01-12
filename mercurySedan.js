//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        this.maximumPassengers = 6
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 200
        this.fuel = 100
        this.scheduledService = false
    }

    loadPassenger(num) {
        if(this.passenger < this.maximumPassengers) {
            return true
        }
    }

    start() {
        if(this.fuel > 0) {
            console.log("starting engine")
        }
    }

    scheduledService(mileage) {
        if(this.mileage > 30000) {
            console.log("time for maintenance")
        }
    }

}

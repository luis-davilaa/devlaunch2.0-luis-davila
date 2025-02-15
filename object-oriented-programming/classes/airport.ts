/*
1. El objetivo es crear una clase Airport que modele las caracteristicas y operaciones de un aeropuerto de forma mas avanzada.
    
    Cada aeropuerto tiene un nombre, ubicación, pista de aterrizaje (runway), un nivel de trafico (bajo, medio, alto).
    
    La clase debe incluir:
    
    Un método changeTrafficLevel que permita cambiar el nivel del tráfico aereo.
    
    Un método emergencyLanding que cierre la pista de aterrizaje y marque el nivel del tráfico como alto.
    
    Un método displayInfo que muestre el nombre del aeropuerto, ubicación y el estado actual de la pista y el nivel de tráfico.
*/

type TrafficLevel = "low" | "medium" | "high"

class Airport {
  private _initialRunwayStatus: boolean
  private _initialTrafficLevel: TrafficLevel

  constructor(
    private name: string,
    private location: string,
    private _runwayStatus: boolean = true,
    private _trafficLevel: TrafficLevel = "low"
    ) {
      this._initialRunwayStatus = _runwayStatus
      this._initialTrafficLevel = _trafficLevel
    }

    set trafficLevel(traffic: TrafficLevel) {
      this._trafficLevel = traffic
    }

    get trafficLevel() {
      return this._trafficLevel
    }

    set runwayStatus(status: boolean) {
      this._runwayStatus = status
    }

    get runwayStatus() {
      return this._runwayStatus
    }

    changeTrafficLevel(traffic: TrafficLevel): string {
      this.trafficLevel = traffic
      return `The traffic level has changed to ${traffic}`
    }

    emergencyLanding(): string {
      this.runwayStatus = false
      this.trafficLevel = "high"
      return `Emergency landing at the ${this.name} airport. The runway is currently closed and the traffic level is ${this._trafficLevel}.`
    }

    resetStatus(): void {
      this._runwayStatus = this._initialRunwayStatus;
      this._trafficLevel = this._initialTrafficLevel;
    }

    displayInfo() {
      return `Airport Name: ${this.name}
Location: ${this.location}
Runway Status: ${this._runwayStatus}
Traffic level: ${this._trafficLevel}`
    }
}

const airport1 = new Airport("Juan Santamaria", "SJO")

console.log(airport1.emergencyLanding())
console.log()
console.log(airport1.displayInfo())
console.log()
airport1.resetStatus()
console.log()
console.log(airport1.displayInfo())



/*
When it comes to fans, they often have distinct characteristics like speed settings, size, power measured in watts or horsepower, type, and color.

To handle and change fan features well, it's helpful to put them in a class system. This way, we have a clear structure to deal with fan properties, making it easier to understand, reuse, and maintain the code.

To tackle this task, we'll create a class that encapsulates the various attributes of a fan. This class will include a constructor to initialize these attributes and methods such as getters and setters to access and modify them as needed. By implementing this class structure, we can efficiently represent and manage the characteristics of fans in our system.

This class is designed to provide all the essential characteristics of the fan as soon as it's created.
*/
type FanSpeed = 0 | 1 | 2 | 3
type FanSize = "small" | "medium" | "large"
type FanPower = "40W" | "55W" | "75W" | "100W"
type FanType = "tower" | "pedestal" | "floor" | "wall mount"
type FanColor = "white" | "black" | "gray"
class Fan {
  constructor(
    private speed: FanSpeed,
    private size: FanSize,
    private power: FanPower,
    private type: FanType,
    private color: FanColor) {}

  public setSpeed = (speed: FanSpeed) => {
    this.speed = speed
  }

  public getSpeed = () => {
    return this.speed
  }

  public setSize = (size: FanSize) => {
    this.size = size
  }

  public getSize = () => {
    return this.size
  }

  public setPower = (power: FanPower) => {
    this.power = power
  }

  public getPower = () => {
    return this.power
  }

  public setType = (type: FanType) => {
    this.type = type
  }

  public getType = () => {
    return this.type
  }

  public setColor = (color: FanColor) => {
    this.color = color
  }

  public getColor = () => {
    return this.color
  }
}

const fan1 = new Fan(0, "large", "55W", "tower", "gray")

fan1.setColor("white")
console.log(fan1.getColor())
console.log(fan1.getPower())
console.log(fan1.getSize())
console.log(fan1.getSpeed())
console.log(fan1.getType())
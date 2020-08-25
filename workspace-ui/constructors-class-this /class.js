class Plant {
  constructor(
    type,
    isPerennial,
    leafDescription,
    leafColor,
    flowerColor,
    flowerDescription,
    gallonsWaterPerWeek,
    amountOfSunNeeded
  ) {
    (this.type = type),
      (this.isPerennial = isPerennial),
      (this.leafDescription = leafDescription),
      (this.leafColor = leafColor),
      (this.flowerColor = flowerColor),
      (this.flowerDescription = flowerDescription),
      (this.gallonsWaterPerWeek = gallonsWaterPerWeek),
      (this.amountOfSunNeeded = amountOfSunNeeded);
  }

  describePlant() {
    return `A ${this.type} which has ${this.leafColor} that are 
          ${this.leafDescription}. The flowers are ${this.flowerColor}
          ${this.flowerDescription}`;
  }

  clone() {
    let clone = new Plant(
      this.type,
      this.isPerennial,
      this.leafDescription,
      this.leafColor,
      this.flowerColor,
      this.flowerDescription,
      this.gallonsWaterPerWeek,
      this.amountOfSunNeeded
    );
    return clone;
  }
}



class Estate {
    constructor (
        roseArbor,
        perennialGarden,
        slopePlanters
    )
}

let roseArbor = new estate("rose");
let perennialGarden = new estate("isPerennial");
let slopePlanters = new estate("");

addPlantToEstate() {
        this.estate = estate
        this.plant = plant
}

describeGarden(){
    this.gardenName = gardenName
    this.listOfPlants = listOfPlants
}

class Garden {
  constructor(name, plants) {
    this.name = name;
    this.plants = [];
  }
  describeGarden() {
    return `${this.name}`;
  }

  addPlant(plant) {
    plant.plants.push(name);
  }
}

describeEstate(){
    this.estate = estate;
}

class Estate {
  constructor(garden) {
    this.roseArbor = new Garden("Rose Arbor");
    this.perennialGarden = new Garden("Perennial");
    this.slopePlanters = new Garden("Slope Planters");
  }
  describeEstate() {
    return `${this.roseArbor} + ${this.perennialGarden} + ${this.slopePlanters}`;
  }

  addPlantToEstate(plant, garden) {
    garden.roseArbor.push(plant);
    garden.perennialGarden.push(plant);
    gardent.slopePlanters.push(plant);
  }

  calculateWaterUsagePerWeek(){
      this.estate = estate;
  }

  cloneAllTheRosesAndChangeTheirColors(){
    this.estate = estate;   
}

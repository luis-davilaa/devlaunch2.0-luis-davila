type InstrumentType = "wind" | "percussion" | "string"

abstract class Instrument {
  constructor(public type: InstrumentType) {}

  play() {}
}

class Guitar extends Instrument {
  constructor() {
    super("string")
  }

  play() {
    return `🎸 is making a sound`
  }
}

class Flute extends Instrument {
  constructor() {
    super("wind")
  }

  play() {
    return `🪈 is making a sound`
  }
}

class Drum extends Instrument {
  constructor() {
    super("percussion")
  }

  play() {
    return `🥁 is making a sound`
  }
}

class Artist {
  constructor () {}

  playInstrument(instrument: Instrument) {
    return instrument.play()
  }
}

const guitar1 = new Guitar()
const flute1 = new Flute()
const drum1 = new Drum()

const artist = new Artist()

console.log(artist.playInstrument(guitar1))
console.log(artist.playInstrument(flute1))
console.log(artist.playInstrument(drum1))
class MusicalScale {
  constructor(id, name, intervalStr, isSharp) {
    this.id = id;
    this.name = name;
    this.isSharp = isSharp;

    this.intervalStr = intervalStr;
    this.intervals = this.intervalStr.split('');

    this.notes = isSharp
      ? ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
      : ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

    // scenario 1

    /* const scale = this.intervals.reduce(
      (acc, step) => {
        let prevIndex = acc[acc.length - 1];
        let stepSize = step === 'm' ? 1 : step === 'M' ? 2 : 3;
        acc.push((prevIndex + stepSize) % 12);
        return acc;
      },
      [0]
    );
    this.scale = scale; */

    this.scale = this.getScale(0);
  }
  getScale(startIndex, noteNames = false) {
    return this.intervals.reduce(
      (acc, step) => {
        // für den Fall noteNames = true wird der string aus der Notenliste genommen, ansonten der index
        let prevIndex = noteNames
          ? this.notes.indexOf(acc[acc.length - 1]) //
          : acc[acc.length - 1];

        let stepSize = step === 'm' ? 1 : step === 'M' ? 2 : 3;
        let newIndex = (prevIndex + stepSize) % this.notes.length;

        acc.push(noteNames ? this.notes[newIndex] : newIndex);
        return acc;
      },
      [noteNames ? this.notes[startIndex] : startIndex]
    );
  }

  getNames() {
    // scenario 2

    /* const names = this.intervals.reduce(
      (acc, step) => {
        let prevIndex = this.notes.indexOf(acc[acc.length - 1]);
        console.log({ prevIndex });
        let stepSize = step === 'm' ? 1 : step === 'M' ? 2 : 3;
        acc.push(this.notes[(prevIndex + stepSize) % this.notes.length]);

        return acc;
      },
      [this.notes[0]]
    );
    return names; */

    return this.getScale(0, true);
  }

  transpose(tonic, normalized = false) {
    // scenario 3

    /* const scale = this.intervals.reduce(
      (acc, step) => {
        let prevIndex = acc[acc.length - 1];
        let stepSize = step === 'm' ? 1 : step === 'M' ? 2 : 3;
        acc.push((prevIndex + stepSize) % 12);
        return acc;
      },
      [(tonic + 12) % 12]
    );
    return scale; */

    return this.getScale((tonic + 12) % 12);
  }
}

// tests ------------------------------------------------------------------

const givenIntervals = {
  id: 0,
  name: 'Ionian',
  intervalStr: 'MMmMMM',
  isSharp: true,
};

const givenIntervals2 = {
  id: 2,
  name: 'Other',
  intervalStr: 'MmMMmM',
  isSharp: true,
};

const newScale = new MusicalScale(
  givenIntervals.id,
  givenIntervals.name,
  givenIntervals.intervalStr,
  givenIntervals.isSharp
);
const newScale2 = new MusicalScale(
  givenIntervals2.id,
  givenIntervals2.name,
  givenIntervals2.intervalStr,
  givenIntervals2.isSharp
);

console.log(newScale.getNames());

console.log(newScale.transpose(7));

console.log(newScale2.transpose(5));

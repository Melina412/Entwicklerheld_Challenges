const shows = [
  {
    id: 1,
    title: 'Once upon node.js',
    duration: 189,
    description: 'A show about the beginning of Javascript',
    url: 'https://task-static-files.s3.eu-central-1.amazonaws.com/tv-show/4.png',
  },
  {
    id: 2,
    title: 'Code runner',
    duration: 95,
    description: '',
    url: 'https://task-static-files.s3.eu-central-1.amazonaws.com/tv-show/3.png',
  },
  {
    id: 3,
    title: 'Code runner part 2',
    duration: 95,
    description: '',
    url: 'https://task-static-files.s3.eu-central-1.amazonaws.com/tv-show/3.png',
  },
];

const times = [
  {
    starttime: 1080,
    id: 1,
  },
  {
    starttime: 625,
    id: 2,
  },
  {
    starttime: 745,
    id: 3,
  },
  {
    starttime: 1280,
    id: 1,
  },
];

function getSortedShows(shows, times) {
  const getTime = (starttime) => {
    const hours = String(Math.floor(starttime / 60)).padStart(2, '0');
    const minutes = String(starttime % 60).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;

    return timeString;
  };

  const timetable = times.map((time) => {
    const show = shows.find((show) => time.id === show.id);

    const result = {
      title: `<p class="title">${show.title}</p>`,
      starttime: getTime(time.starttime),
      url: show.url,
      titleText: show.title,
      start: time.starttime,
      duration: show.duration,
    };

    return result;
  });

  const sortedResult = timetable?.sort((a, b) =>
    a.starttime.localeCompare(b.starttime)
  );
  // console.log({ sortedResult });

  let conflicting = false;
  for (let i = 0; i < sortedResult.length - 1; i++) {
    const currentShow = sortedResult[i];
    const nextShow = sortedResult[i + 1];
    // console.log({ currentShow, nextShow });

    const currentShowEnd = currentShow.start + currentShow.duration;
    const nextShowStart = nextShow.start;

    if (currentShowEnd > nextShowStart) {
      conflicting = true;
      throw new Error(`${currentShow.titleText}, ${nextShow.titleText}`);
    }
  }

  if (!conflicting) {
    return sortedResult?.map(({ title, starttime, url }) => ({
      title,
      starttime,
      url,
    }));
  }
}

const result = getSortedShows(shows, times);
console.log(result);

// width soll die gesamtbreite der progress bar sein (100%), progress die prozentuale breite
// zb wenn width 500px, duration 100 min und current 20 min ist, sind das 20%. dann muss der progress 20% von 500 sein -> 100 px
function getProgress(width, duration, current) {
  if (width === 0 && duration === 0) {
    return 0;
  }

  let progress = Math.round((current / duration) * width);

  if (progress > width) {
    progress = width;
  }

  return progress;
}

console.log(getProgress(500, 90, 16));
console.log(getProgress(0, 0, 0));
console.log(getProgress(200, 37, 100));

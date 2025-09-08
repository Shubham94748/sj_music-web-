console.log("hello user");

let songIndex = 0;
let audioElement = new Audio("song/52_Bars_1.mp3");

let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("processbar");
let gif = document.getElementById("gif");

let songs = [
  {
    songname: "52 bars",
    filePath: "song/52_Bars_1.mp3",
    coverPath: "covers/52_Bars_1.jpg",
  },
  {
    songname: "Elevated",
    filePath: "Elevated_1.mp3",
    coverPath: "covers/Elevated_1.jpg",
  },
  {
    songname: "Ghode 3",
    filePath: "song/Ghode_3.mp3",
    coverPath: "covers/Ghode_3.jpg",
  },
  {
    songname: "Raat Ke Shikari",
    filePath: "song/Raat_ke_Shikari.mp3",
    coverPath: "covers/Raat_ke_Shikari.jpg",
  },
  {
    songname: "Rail",
    filePath: "song/Rail_1.mp3",
    coverPath: "covers/Rail_1.jpg",
  },
  {
    songname: "Supreme",
    filePath: "song/Supreme_1.mp3",
    coverPath: "covers/Supreme_1.jpg",
  },
  {
    songname: "wavy",
    filePath: "song/Wavy_1.mp3",
    coverPath: "covers/Wavy_1.jpg",
  },
  {
    songname: "Winning speech",
    filePath: "song/Winning_Speech_1.mp3",
    coverPath: "covers/Winning_Speech_1.jpg",
  },
];

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
    console.log("playing");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
    console.log("paused");
  }
});

audioElement.addEventListener("timeupdate", () => {
  console.log("time update");
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value / 100) * audioElement.duration;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element, songIndex) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllPlays();
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");

      audioElement.src = songs[songIndex].filePath;
      audioElement.currentTime = 0;
      audioElement.play();

      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
      gif.style.opacity = 1;
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 7) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }

  audioElement.src = songs[songIndex].filePath;
  audioElement.currentTime = 0;
  audioElement.play();

  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = 1;
});


document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }

  audioElement.src = songs[songIndex].filePath;
  audioElement.currentTime = 0;
  audioElement.play();

  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = 1;
});
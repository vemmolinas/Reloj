var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "240",
    width: "420",
    playerVars: {
      listType: "playlist",
      list: "PL0ONFXpPDe_mtm3ciwL-v7EE-7yLHDlP8",
      autoplay: 1,
      controls: 0,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  console.log(event.target.getPlaylist());
  // getYouTubeInfo(event.target.getPlaylist()[0]);
  valorVol.innerHTML = player.getVolume();
}

var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED && !done) {
    done = true;
    console.log("Video Finished");
    stopVideo();
    player.nextVideo();
    console.log(event.target.getPlaylist());
  }
}
function stopVideo() {
  player.stopVideo();
}

function playPause(option) {
  if (option === "play") {
    player.playVideo();
    document.getElementById(option).style.color = "#f2cf67";
    document.getElementById("pause").style.color = "#dc94ba";
  } else {
    player.pauseVideo();
    document.getElementById(option).style.color = "#f2cf67";
    document.getElementById("play").style.color = "#dc94ba";
  }
}

function activaMuteo(option) {
  if (option === "mutear") {
    player.mute();
    document.getElementById(option).style.color = "#f2cf67";
    document.getElementById(option).setAttribute("id", "desmutear");
  } else {
    player.unMute();

    document.getElementById(option).style.color = "#dc94ba";
    document.getElementById(option).setAttribute("id", "mutear");
  }
}

function ajustarVolumen(option) {
  var volume = player.getVolume();
  if (option == "+") {
    volume += 5;
    if (volume > 100) {
      volume = 100;
    }
  } else {
    volume -= 5;
    if (volume < 0) {
      volume = 0;
    }
  }
  player.setVolume(volume);
  valorVol.innerHTML = volume;
}

function activarRandom(option) {
  var random = document.getElementById("random");

  if (option == true) {
    player.setShuffle(true);
    random.setAttribute("onclick", "activarRandom(false)");
    random.style.color = "#f2cf67";
  } else {
    player.setShuffle(false);
    random.setAttribute("onclick", "activarRandom(true)");
    random.style.color = "#dc94ba";
  }
}

function cambioVideo(option) {
  document.getElementById("play").style.color = "#f2cf67";
  document.getElementById("pause").style.color = "#dc94ba";
  if (option == "next") {
    player.nextVideo();
  } else {
    player.previousVideo();
  }
}

// function getYouTubeInfo(id) {
//   $.ajax({
//     url: "http://gdata.youtube.com/feeds/api/videos/" + id + "?v=2&alt=json",
//     dataType: "jsonp",
//     success: function (data) {
//       var title = data.entry.title.$t;
//       var author = data.entry.author[0].name.$t;
//       $("#title").html(title);
//       $("#author").html(author);
//       alert(title + " - " + author);
//     },
//   });
// }

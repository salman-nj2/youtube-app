async function getData() {
  var input = document.getElementById("search").value;
  console.log("input:", input);
  let res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?q=${input}&part=snippet&maxResults=20&key=AIzaSyBhCV1JVd985WpT2gFkRTP0tAnsguxS_bY`
  );
  let data = await res.json();
  console.log("data:", data);
  var videos = document.querySelector(".videos");
  var video_data = data.items;
  // console.log("video_data:", video_data);
  videos.innerHTML = null;
  let j = 0;
  video_data.forEach(({ id: { videoId } }) => {
    let video_title = video_data[j].snippet.title;
    let video_channel = video_data[j].snippet.channelTitle;
    let date = video_data[j].snippet.publishedAt.substring(0, 10);
    var div = document.createElement("div");
    div.innerHTML = `<iframe width="330" height="240" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div class="heading"><p>${video_title}</p><p>${video_channel}</p><p id="views">${date}</p></div>`;
    videos.append(div);
    j++;
  });
}

async function homepage() {
  var input = document.getElementById("search").value;
  //console.log("input:", input);
  let res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?q=india&part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyBhCV1JVd985WpT2gFkRTP0tAnsguxS_bY`
  );
  let data = await res.json();
  console.log("data-home:", data);
  var videos = document.querySelector(".videos");
  var video_data = data.items;
  console.log("video_data:", video_data);
  videos.innerHTML = null;
  let i = 0;
  video_data.forEach(({ id: { videoId } }) => {
    let x = video_data[i].snippet.title;
    let video_channel1 = video_data[i].snippet.channelTitle;
    let date = video_data[i].snippet.publishedAt.substring(0, 10);
    console.log("x:", x);
    var div = document.createElement("div");
    div.innerHTML = `<iframe width="330" height="240" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div class="heading"><p>${x}</p><p>${video_channel1}</p><p id="views">${date}</p></div>`;
    videos.append(div);
    i++;
  });
}

homepage();
//("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&regionCode=In&maxResults=20&key=AIzaSyBhCV1JVd985WpT2gFkRTP0tAnsguxS_bY");

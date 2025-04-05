const stations = [
    "大宮駅", "浦和駅", "与野駅", "南与野駅", "北浦和駅", "東浦和駅", "西浦和駅",
    "武蔵浦和駅", "中浦和駅", "与野本町駅", "北与野駅", "さいたま新都心駅",
    "東大宮駅", "土呂駅", "日進駅", "指扇駅", "南浦和駅", "北大宮駅",
    "大和田駅", "七里駅", "岩槻駅", "宮原駅", "西大宮駅", "見沼代親水公園駅"
  ];
  
  function showRandomStation() {
    const index = Math.floor(Math.random() * stations.length);
    const station = stations[index];
  
    const display = document.getElementById("station");
    const mapLink = document.getElementById("map-link");
  
    display.textContent = station;
  
    const encodedStation = encodeURIComponent("埼玉県 " + station);
    mapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodedStation}`;
    mapLink.style.display = "inline-block";
    mapLink.textContent = `${station} を地図で見る`;
  }
  
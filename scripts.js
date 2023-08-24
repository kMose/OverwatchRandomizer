



function randomizeHero(role){
    const tankImage = document.querySelector(".tank-image")
    const dpsImage = document.querySelector(".dps-image")
    const healImage = document.querySelector(".heal-image")

    const tankButton = document.querySelector(".tank-button");
    const dpsButton = document.querySelector(".dps-button");
    const healButton = document.querySelector(".heal-button")

    let result = 0;
    const dpsList = [
        "Reaper", "Bastion", "Genji", "Cassidy", "Symmetra", "Ashe", "Soldier",
        "Junkrat", "Torbjorn", "Mei", "Sojourn", "Widowmaker", "Tracer", "Hanzo",
        "Sombra", "Echo", "Pharah"
        ];

    const tankList = [
        "DVA", "Doomfist", "Junkerqueen", "Orisa", "Rammatra", "Reinhardt",
        "Roadhog", "Sigma", "Winston", "WreckingBall", "Zarya"
        ];

    const healList = [
        "Moira", "Ilari", "Lifeweaver", "Zenyatta", "Kiriko", "Mercy",
        "Ana", "Brigitte", "Lucio", "Baptiste"
    ]

    if(role == "dps"){
        result = getRandomInt(17);
        console.log(dpsList[result]);
        dpsImage.src = "dps/"+result+".png";
        dpsButton.textContent = dpsList[result];

    }
    else if(role == "heal"){
        result = getRandomInt(10);
        console.log(healList[result]);
        healImage.src = "heal/"+result+".png";
        healButton.textContent = healList[result];
    }
    else if(role == "tank"){
        result = getRandomInt(11);
        console.log(tankList[result]);
        tankImage.src = "tank/"+result+".png";
        tankButton.textContent = tankList[result];
    }
}

// 3 will return 0,1,2
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var Mission;
var Lime;
var Thai;
var Burger;
var Bettys;
var Jacks;
var Mumbai;
var Iveta;
var restaurants;
var btn;
var t;
var rand;
var Missioncln;
var Limecln;
var Thailn;
var Burgercln;
var Bettyscln;
var Jackscln;
var Mumbaicln;
var Ivetacln;

function settingup() {
    Mission = document.getElementById("Mission");
    Missioncln = Mission.cloneNode(true);
    Lime = document.getElementById("Lime");
    Limecln = Lime.cloneNode(true);
    Thai = document.getElementById("Thai");
    Thaicln = Thai.cloneNode(true);
    Burger = document.getElementById("Burger");
    Burgercln = Burger.cloneNode(true);
    Bettys = document.getElementById("Bettys");
    Bettyscln = Bettys.cloneNode(true);
    Jacks = document.getElementById("Jacks");
    Jackscln = Jacks.cloneNode(true);
    Mumbai = document.getElementById("Mumbai");
    Mumbaicln = Mumbai.cloneNode(true);
    Iveta = document.getElementById("Iveta");
    Ivetacln = Iveta.cloneNode(true);
    Final = document.getElementById("Final");
    restaurants = [Missioncln, Limecln, Thaicln, Burgercln, Bettyscln, Jackscln, Mumbaicln, Ivetacln];
    btn = document.getElementById("pickButton");
    rand = randomize();
}

function randomize() {
    return Math.floor((Math.random() * 8));
}

function pick() {
    rand = randomize();
    Final.removeChild(Final.childNodes[0]);
    var picked = restaurants[rand];
    Final.appendChild(picked);
}
document.addEventListener("DOMContentLoaded", settingup);
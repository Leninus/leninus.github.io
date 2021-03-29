var techData =
{
    refresh: 1000
}
var gameData = 
{
    gold: 0,
    gpc: 1,
    pickaxes: 1,
    drills: 0,
    pickaxeCost: 10,
    drillCost: 150,
}
var mainGameLoop = window.setInterval(function() 
{
    mineGold()
}, techData.refresh)
var saveGameLoop = window.setInterval(function()
{
    localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
}, 15000)
var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null)
{
    gameData = savegame
}

function mineGold()
{
    gameData.gold += gameData.gpc 
    document.getElementById("gold").innerHTML = gameData.gold + " Gold Mined"
}
function buyGPC()
{
    if (gameData.gold >= gameData.pickaxeCost)
    {
        gameData.gold -= gameData.pickaxeCost
        gameData.gpc += 1
        gameData.pickaxes += 1
        gameData.pickaxeCost *= 1.5
        Math.round(gameData.pickaxeCost)
        document.getElementById("gold").innerHTML = gameData.gold + " Gold Mined"
        document.getElementById("pCUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.pickaxes + ") Cost: " + gameData.pickaxeCost + " Gold"
    }
}
function buyGpc2()
{
    if (gameData.gold >= gameData.drillCost)
    {
        gameData.gold -= gameData.drillCost
        gameData.gpc += 10
        gameData.drills += 1
        gameData.drillCost *= 1.5
        Math.round(gameData.drillCost)
        document.getElementById("gold").innerHTML = gameData.gold + "Gold Mined"
        document.getElementById("pCUpgrade2").innerHTML = "Upgrade drill (level " + gameData.drills + ") Cost: " + gameData.drillCost + " Gold"
    }
}

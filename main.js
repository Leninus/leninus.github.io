var gameData = 
{
    gold: 0,
    gpc: 1
}
function mineGold()
{
    gameData.gold += gameData.gpc 
    document.getElementById("gold").innerHTML = "${gameData.gold} Gold Mined"
}
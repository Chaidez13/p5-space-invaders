const BOARD = {
    width: 650,
    height: 800,
}

//TODO: Eliminar todo lo relacionado a Paddle (Migrado a player)
const PADDLE = {
    width: 37,
    height: 128.6,
    hitboxWidth: 19, 
    hitboxHeight: 110.5,
}
const BALL = {
    side: 67,
    hitboxSide: 41,
    hbComepnsation: 37,
}
const PLAYERS_ID = {
    player1: 'p1',
    player2: 'p2',
}
//
const PLAYER = {
    width: 45,
    height: 45,
    hitboxWidth: 40, 
    hitboxHeight: 40,
}
const ENEMY = {
    width: 40,
    height: 40,
    hitboxWidth: 32, 
    hitboxHeight: 36,
}
const LIFES = {
    size: 30,
}
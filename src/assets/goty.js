var config = {
    type: Phaser.AUTO,
    width: 960,
    height: 960,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var saves;
var velocity = 160;
var mvelocity = velocity - 2*velocity;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
var timedEvent;
var time = 0;
var spawned = 0;
var nbNaufrage = 0;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('map', 'assets/map.png');

    this.load.image('boat1', 'assets/boat1.png');
    this.load.image('boat2', 'assets/boat2.png');
    this.load.image('boat3', 'assets/boat3.png');
    this.load.image('boat4', 'assets/boat4.png');
    this.load.image('boat5', 'assets/boat5.png');
    this.load.image('boat6', 'assets/boat6.png');
    this.load.image('boat7', 'assets/boat7.png');
    this.load.image('boat8', 'assets/boat8.png');

    this.load.image('save0', 'assets/save0.png');
    this.load.image('save1', 'assets/save1.png');
    this.load.image('save2', 'assets/save2.png');
    this.load.image('save3', 'assets/save3.png');
    this.load.image('save4', 'assets/save4.png');
    this.load.image('save5', 'assets/save5.png');
}

function create ()
{
    this.add.image(480, 480, 'map');

    // The player and its settings
    player = this.physics.add.sprite(160, 820, 'boat2');

    timedEvent = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });

    //  Player physics properties. Give the little guy a slight bounce.
    player.setCollideWorldBounds(true);

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    //  The score
    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#ffffff' });

}

function update ()
{

    if (nbNaufrage >= 3){
      gameOver = true;
    }

    if (gameOver)
    {
      this.add.text(420, 460, 'Perdu !', { fontSize: '32px', fill: '#ffffff ' });
      this.add.text(190, 500, 'Vous avez sauvé : ' + score + ' personnes !', { fontSize: '32px', fill: '#ffffff ' });
      this.add.text(120, 540, '(Rechargez la page pour relancer le jeu)', { fontSize: '32px', fill: '#ffffff ' });
      player.setVelocity(0);
      return;
    }

    player.setVelocity(0);

    //LEFT & RIGHT
    if (cursors.left.isDown)
    {
        player.setVelocityX(mvelocity);
        player.setTexture('boat5');

    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(velocity);
        player.setTexture('boat1'); 
    }

    //UP & DOWN
    if (cursors.up.isDown)
    {
        player.setVelocityY(mvelocity);
        player.setTexture('boat3');
    }
    else if (cursors.down.isDown)
    {
        player.setVelocityY(velocity);
        player.setTexture('boat7');
    }

    //TOPR & DOWNR
    if (cursors.right.isDown && cursors.up.isDown)
    {
        player.setVelocityX(velocity/1.25);
        player.setVelocityY(mvelocity/1.25);
        player.setTexture('boat2');

    }
    else if (cursors.right.isDown && cursors.down.isDown)
    {
        player.setVelocityX(velocity/1.25);
        player.setVelocityY(velocity/1.25);
        player.setTexture('boat8'); 
    }

    //TOPL & DOWNL
    if (cursors.left.isDown && cursors.up.isDown)
    {
        player.setVelocityX(mvelocity/1.25);
        player.setVelocityY(mvelocity/1.25);
        player.setTexture('boat4');

    }
    else if (cursors.left.isDown && cursors.down.isDown)
    {
        player.setVelocityX(mvelocity/1.25);
        player.setVelocityY(velocity/1.25);
        player.setTexture('boat6'); 
    }

    if(time%3 == 0 && spawned == 0){
      saves = this.physics.add.group({
        key: 'save5',
        setXY: { x: Phaser.Math.Between(200, 920), y: Phaser.Math.Between(50, 920) }
    });
      spawned = 1;
      nbNaufrage += 1;
    }

    this.physics.add.overlap(player, saves, collectsave, null, this);
}

function onEvent ()
{
    time += 1;
    spawned = 0;
}

function collectsave (player, save)
{
    save.destroy();

    score += 1;
    nbNaufrage -= 1;
    scoreText.setText('Score: ' + score);
}
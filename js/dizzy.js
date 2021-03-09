let ctx;
let aaa = 0
let animFrame = 2;
let idle = false
let siema = 0
let siema1 = 0
let siema2 = 0
let siema3 = 0
let siema4 = 0
let siema5 = 0
let siema6 = 0
let siema7 = 0
let siema8 = 0
let siemaDeath = 0
let siemaRespawn = 0
let jumpReset = 0
let walkLeftFrame = 0
let collTab = []
let itemTab = []
let bg = new Image();
let eee
let waleWiadro
let dizzy
let waleSkoka
let name
let xd = 0
let particlePos = 0
let particlePos2 = 330
let particleImg = {}
let deathCause = {}
let audio
let lives = 2
let life = {}
let deathFin = 0
let invToggle = false
let eq = {}
let eq2 = {}
let eq3 = {}
let eq4 = {}
let selected = 2
let itemCount = 1
let noEnter = false
let inv = []
let troll
let jablko
let ogreKickEnd
let trollKick = {}
let trollTalk = 0
let trollText = {}
let fire
let jug
let fireTalk = 0
let tyry = 0
let bread
let ratTalk = 0
let ratAte = 0
let start = false
let canvas
let startScreen = new Image();
document.addEventListener("DOMContentLoaded", function () {

    startScreen = document.getElementById('ee')
    let canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.drawImage(startScreen, 0, 0)
    console.log(startScreen, canvas, ctx)
    document.addEventListener('keypress', function (e) {
        if (e.which = 12 && start == false) {
            start = true
            document.getElementById('ee').style.display = 'none'
            game();
            aaa++



        }
    })
    function game() {
        if (start == false) {

        }
        else {
            items();
            the_castle_dungeon();
            //smugglers_hideout();
            //the_entrance_hall();
            particleImg.img = new Image();
            particleImg.img.src = 'img/dizzy/particle.png'
            audio = new Audio('audio/death.mp3');
            deathCause.img = new Image();
            life.img = new Image();
            life.img.src = 'img/life.png'
            eq.img = new Image();
            eq.img.src = 'img/eq.png'
            eq2.img = new Image();
            eq2.img.src = 'img/eq2.png'
            eq3.img = new Image();
            eq3.img.src = 'img/eq3.png'
            eq4.img = new Image();
            eq4.img.src = 'img/eq4.png'
            trollKick.img = new Image();
            trollKick.img.src = 'img/trollKick.png'
            trollText.img = new Image();
            trollText.img.src = 'img/trollText1.png'
            document.body.addEventListener('keypress', function (e) {


                if (e.which == 122 && dizzy.walkRight == false && !dizzy.jumpLeft && !dizzy.jumpRight && !dizzy.jumpUp && !dizzy.ogreKick && !dizzy.talk) {

                    if (dizzy.inventory) {
                        if (itemCount < 3) {
                            selected -= 1
                            if (selected == -1)
                                selected = 2
                            if (itemCount == 1 && selected == 1) {

                                selected -= 1
                            }
                        }
                    }
                    else
                        dizzy.walkLeft = true
                    //dizzy.positionX -= 4

                }
                else if (e.which == 120 && dizzy.walkLeft == false && !dizzy.jumpLeft && !dizzy.jumpRight && !dizzy.jumpUp && !dizzy.ogreKick && !dizzy.talk) {

                    if (dizzy.inventory) {
                        if (itemCount < 3) {
                            selected += 1

                            if (selected == 3)
                                selected = 0
                            if (itemCount == 1 && selected == 1) {

                                selected += 1
                            }
                        }
                    }
                    else
                        dizzy.walkRight = true

                }
                else if (e.which == 32 && dizzy.jumpUp == false && !dizzy.walkLeft && !dizzy.walkRight && dizzy.ground && !dizzy.jumpLeft && !dizzy.jumpRight && !dizzy.ogreKick && !dizzy.talk) {
                    //siema3 = 0
                    waleSkoka = true
                    jumpReset = 0

                    dizzy.jumpUp = true
                    dizzy.fall = false
                    setTimeout(function () { dizzy.fall = true; waleSkoka = false; }, 750)
                }
                else if (e.which == 32 && !dizzy.jumpUp && dizzy.walkLeft && !dizzy.jumpLeft && !dizzy.jumpRight && !dizzy.ogreKick && !dizzy.talk) {
                    jumpReset = 0
                    waleSkoka = true
                    dizzy.jumpLeft = true
                    dizzy.fall = false
                    setTimeout(function () { dizzy.fall = true; waleSkoka = false }, 750)
                }
                else if (e.which == 32 && !dizzy.jumpUp && dizzy.walkRight && !dizzy.jumpLeft && !dizzy.jumpRight && !dizzy.ogreKick && !dizzy.talk) {
                    jumpReset = 0
                    waleSkoka = true
                    dizzy.jumpRight = true
                    dizzy.fall = false
                    setTimeout(function () { dizzy.fall = true; waleSkoka = false }, 750)
                }
                if ((e.which == 13 && !noEnter && !dizzy.jumpLeft && !dizzy.jumpRight && !dizzy.jumpUp && !dizzy.walkLeft)) {
                    if (!dizzy.ogreKick && !dizzy.talk) {
                        invToggle = !invToggle
                        if (invToggle) {
                            dizzy.inventory = true
                            selected = 2
                        }
                        else {
                            dizzy.inventory = false
                            if (selected == 0) {

                                inv[0].inventory = false
                                inv[0].posX = dizzy.positionX + 20
                                inv[0].posY = dizzy.positionY - inv[0].height
                                inv[0].map = name
                                if (inv[0].name == 'jug')
                                    inv[0].posY = dizzy.positionY - 28
                                else if (inv[0].name == 'bread')
                                    inv[0].posY = dizzy.positionY - 20
                                inv.shift();
                                itemCount--
                            }
                            else if (selected == 1) {
                                inv[1].inventory = false
                                inv[1].posX = dizzy.positionX + 20
                                inv[1].posY = dizzy.positionY - inv[1].height
                                inv[1].map = name
                                if (inv[1].name == 'jug')
                                    inv[1].posY = dizzy.positionY - 28
                                else if (inv[1].name == 'bread')
                                    inv[1].posY = dizzy.positionY - 20
                                inv.splice(-1, 1)
                                itemCount--
                            }

                        }

                    }
                    else if (dizzy.ogreKick) {
                        ogreKickEnd = true
                    }
                    if (jablko == 'given' && trollTalk < 4) {
                        trollTalk++
                        dizzy.talk = true
                    }
                    if (trollTalk == 4) {
                        trollTalk = 20
                        dizzy.talk = false
                    }
                    if (jug == 'given' && fireTalk < 1) {

                        fireTalk++
                        dizzy.talk = true

                    }
                    if (fireTalk == 1) {
                        fireTalk = 20
                        dizzy.talk = false
                        fire.posX = 4000
                        fire.collision = false
                    }

                    if (ratTalk == 1) {
                        ratTalk = 20
                        dizzy.talk = false
                    }
                    if (start == false)
                        start = true
                }
            })
            document.body.addEventListener('keyup', function (e) {

                if (e.which == 90) {
                    dizzy.walkLeft = false
                    console.log(dizzy)
                }
                else if (e.which == 88) {
                    dizzy.walkRight = false
                }
            })

            dizzy = new Dizzy();
            // ctx.beginPath();
            // ctx.strokeStyle = "#ffffff"
            // ctx.moveTo(0, 350);
            // ctx.lineTo(640, 350);
            // ctx.stroke();


            /* let div = document.createElement("div")
             div.style.height = '10px'
             div.style.width = '10px'
             div.style.backgroundColor = '#ff0000'
             div.style.position = 'absolute'
             div.style.top = dizzy.positionY + 'px'
             div.style.left = dizzy.positionX + 'px'
             div.id = 'help'
             document.body.appendChild(div)*/

            function draw() {
                //ctx.drawImage(bg, 0, 0)

                for (let i = 0; i < collTab.length; i++) {

                    ctx.drawImage(collTab[i].img, collTab[i].posX, collTab[i].posY - collTab[i].height)

                }
                for (let i = 0; i < itemTab.length; i++) {
                    if (itemTab[i].map == name) {
                        ctx.drawImage(itemTab[i].img, itemTab[i].posX, itemTab[i].posY)

                    }

                }

                ctx.drawImage(bg, 0, 0)

                ctx.font = '13px c64';
                ctx.fillStyle = 'rgb(194,255,255)'
                ctx.fillText(name, 170, 62)
                for (let i = 0; i < lives; i++) {
                    ctx.drawImage(life.img, 178 + i * 18, 16)
                }
                if (name == "the castle's dungeon") {
                    if (xd % 10 == 0) {
                        collTab[13].img.src = 'img/l1/flame2.png'
                        collTab[13].posX = 152
                        collTab[14].img.src = 'img/l1/flame2.png'
                        collTab[14].posX = 475
                        collTab[15].img.src = 'img/l1/flame4.png'
                    }
                    else if (xd % 10 == 5) {
                        collTab[13].img.src = 'img/l1/flame1.png'
                        collTab[13].posX = 150
                        collTab[14].img.src = 'img/l1/flame1.png'
                        collTab[14].posX = 473
                        collTab[15].img.src = 'img/l1/flame3.png'
                    }
                    if (xd % 2 == 0 && szczurZawroc == 0 && !dizzy.dead && !dizzy.inventory && !dizzy.talk) {
                        collTab[16].posX += 6

                    }
                    else if (xd % 2 == 0 && szczurZawroc == 1 && !dizzy.dead && !dizzy.inventory && !dizzy.talk) {
                        if (bread != 'given')
                            collTab[16].posX -= 6
                        else
                            collTab[16].posX += 6
                    }
                    if (collTab[16].posX >= 460) {
                        szczurZawroc = 1
                        if (bread != 'given')
                            collTab[16].img.src = 'img/l1/rat2.png'
                    }
                    else if (collTab[16].posX <= 174) {
                        szczurZawroc = 0
                        collTab[16].img.src = 'img/l1/rat1.png'
                    }
                }
                if (name == "smuggler's hideout") {

                    if (xd % 3 == 0) {
                        tyry++
                        if (tyry == 1)
                            collTab[15].img.src = 'img/l2/water1.png'
                        if (tyry == 2)
                            collTab[15].img.src = 'img/l2/water3.png'
                        if (tyry == 3)
                            collTab[15].img.src = 'img/l2/water4.png'
                        if (tyry == 4)
                            collTab[15].img.src = 'img/l2/water5.png'
                        if (tyry == 5)
                            collTab[15].img.src = 'img/l2/water6.png'


                    }
                    if (tyry == 5)
                        tyry = 1
                }
                if (name == "the entrance hall") {
                    if (xd % 10 == 0) {
                        collTab[4].img.src = 'img/l1/flame2.png'
                        collTab[4].posX = 220
                        collTab[5].img.src = 'img/l1/flame2.png'
                        collTab[5].posX = 400
                        collTab[19].img.src = 'img/l1/flame2.png'
                        collTab[19].posX = 98
                        collTab[20].img.src = 'img/l1/flame2.png'
                        collTab[20].posX = 520
                    }
                    else if (xd % 10 == 5) {
                        collTab[4].img.src = 'img/l1/flame1.png'
                        collTab[4].posX = 218
                        collTab[5].img.src = 'img/l1/flame1.png'
                        collTab[5].posX = 398
                        collTab[19].img.src = 'img/l1/flame1.png'
                        collTab[19].posX = 96
                        collTab[20].img.src = 'img/l1/flame1.png'
                        collTab[20].posX = 518
                    }
                }
            }
            var loop = function () {


                ctx.clearRect(0, 0, canvas.width, canvas.height);
                draw();
                if (dizzy.spawning) {
                    dizzy.spawn();
                }
                if (idle == false && siema == animFrame - 1) {
                    idle = !idle
                }
                else if (idle == true && siema == animFrame - 1) {
                    idle = !idle
                }
                if (dizzy.walkLeft && !dizzy.jumpUp && !dizzy.jumpLeft && !dizzy.dead && !dizzy.spawning && !dizzy.inventory && !dizzy.talk) {

                    if (!dizzy.collLeft)
                        dizzy.positionX -= 4
                    dizzy.animWalkLeft()

                }
                if (dizzy.walkRight && !dizzy.jumpUp && !dizzy.jumpRight && !dizzy.dead && !dizzy.spawning && !dizzy.inventory && !dizzy.ogreKick && !dizzy.talk) {
                    if (!dizzy.collRight)
                        dizzy.positionX += 4
                    dizzy.animWalkRight()
                }

                if (dizzy.jumpUp && !dizzy.dead && !dizzy.spawning && !dizzy.inventory && !dizzy.talk) {
                    dizzy.animJumpUp();

                    if (dizzy.fall == false) {
                        if (dizzy.collTop) {
                            dizzy.positionY = dizzy.positionY
                        }
                        else {
                            dizzy.positionY -= 4

                        }

                    }
                }
                if (dizzy.jumpLeft && !dizzy.dead && !dizzy.spawning && !dizzy.inventory && !dizzy.talk) {
                    dizzy.animJumpLeft();
                    if (!dizzy.fall) {
                        if (dizzy.collTop) {
                            dizzy.positionY = dizzy.positionY
                        }
                        else
                            dizzy.positionY -= 4

                    }
                    if (!dizzy.collLeft)
                        dizzy.positionX -= 4
                }
                if (dizzy.jumpRight && !dizzy.dead && !dizzy.spawning && !dizzy.inventory && !dizzy.ogreKick && !dizzy.talk) {
                    dizzy.animJumpRight();
                    if (!dizzy.fall) {
                        if (dizzy.collTop) {
                            dizzy.positionY = dizzy.positionY
                        }
                        else
                            dizzy.positionY -= 4

                    }
                    if (!dizzy.collRight)
                        dizzy.positionX += 4
                }
                if (!dizzy.walkRight && !dizzy.walkLeft && !dizzy.jumpUp && !dizzy.jumpLeft && !dizzy.jumpRight && !dizzy.dead && !dizzy.spawning && !dizzy.ogreKick) {
                    siema1 = 0
                    siema2 = 0
                    dizzy.animIdle(idle)
                }
                if (dizzy.fall == true && !waleSkoka && !dizzy.spawning && !dizzy.ogreKick && !dizzy.dead) {
                    dizzy.positionY += 4
                }
                if (dizzy.inventory && !dizzy.walkLeft && !dizzy.jumpUp && !dizzy.jumpLeft && !dizzy.jumpRight && !dizzy.dead && !dizzy.spawning && dizzy.ground && !dizzy.talk) {
                    dizzy.inventoryUi();
                }
                siema++
                if (siema > animFrame) {
                    siema = 0
                }
                if (dizzy.dead)
                    siemaDeath++
                if (siemaDeath > 10 || !dizzy.dead) {
                    siemaDeath = 0
                }
                if (dizzy.spawning) {
                    siemaRespawn++
                }
                if (siemaRespawn == 9) {
                    siemaRespawn = 0
                }
                /*if (dizzy.positionY >= 354 - 4) {
                   
                    dizzy.ground = true
                    dizzy.fall = false
                }
                else {
                    dizzy.ground = false
                }*/

                dizzy.ground = false
                waleWiadro = false
                for (let i = 0; i < collTab.length; i++) {
                    if (collTab[i].collision) {
                        //wskakiwanie na niskie
                        if (((dizzy.positionX + 14 < collTab[i].posX + collTab[i].width && dizzy.positionX + 38 > collTab[i].posX) && dizzy.positionY - 20 < collTab[i].posY - collTab[i].height && dizzy.positionY - 20 > collTab[i].posY - collTab[i].height - 10 && dizzy.positionY != collTab[i].posY - collTab[i].height && !dizzy.jumpUp && !dizzy.jumpLeft && !dizzy.jumpRight)) {
                            dizzy.positionY = collTab[i].posY - collTab[i].height

                        }
                        //kolizja prawostronna
                        if ((dizzy.positionX + 4 < collTab[i].posX + collTab[i].width && dizzy.positionX + 36 > collTab[i].posX + collTab[i].width - 4 && dizzy.positionY - 20 > collTab[i].posY - collTab[i].height && dizzy.positionY - 40 < collTab[i].posY)) {
                            dizzy.collLeft = true

                        }
                        else {
                            dizzy.collLeft = false
                        }
                        //kolizja lewostronna
                        if ((dizzy.positionX + 40 > collTab[i].posX && dizzy.positionX + 30 < collTab[i].posX + 4 && dizzy.positionY - 20 > collTab[i].posY - collTab[i].height && dizzy.positionY - 40 < collTab[i].posY)) {
                            dizzy.collRight = true

                        }
                        else {
                            dizzy.collRight = false
                        }
                        //kolizja górna
                        if ((((dizzy.positionX + 14 < collTab[i].posX + collTab[i].width && dizzy.positionX + 38 > collTab[i].posX) && dizzy.positionY >= collTab[i].posY - collTab[i].height && dizzy.positionY <= collTab[i].posY - collTab[i].height + 4) && waleWiadro == false)) {

                            dizzy.ground = true
                            dizzy.fall = false
                            waleWiadro = true

                        }
                        else if (waleWiadro == false) {
                            dizzy.ground = false
                            if (!waleSkoka)
                                dizzy.fall = true

                        }
                        //kolizja dolna
                        if (!dizzy.ground && (dizzy.positionX + 14 < collTab[i].posX + collTab[i].width && dizzy.positionX + 38 > collTab[i].posX) && dizzy.positionY - 40 <= collTab[i].posY && dizzy.positionY - 40 >= collTab[i].posY - 4) {
                            dizzy.collTop = true

                        }
                        else {
                            dizzy.collTop = false
                        }
                    }
                    if (collTab[i].kill) {
                        if ((dizzy.positionX + 6 <= collTab[i].posX + collTab[i].width && dizzy.positionX + 40 >= collTab[i].posX) && (dizzy.positionY >= collTab[i].posY - collTab[i].height && dizzy.positionY <= collTab[i].posY)) {


                            dizzy.dead = true
                            deathSign(collTab[i].kill);
                            if (dizzy.dead) {
                                dizzy.death();
                            }


                        }

                    }


                }


                /*if (dizzy.positionX >= 560 - 48) {
                    dizzy.collRight = true
             
                }
                else {
                    dizzy.collRight = false
                }*/
                /*if (dizzy.positionX <= 80) {
                    dizzy.collLeft = true
                }
                else {
                    dizzy.collLeft = false
                }*/
                if (dizzy.ground == true && jumpReset == 0) {
                    dizzy.jumpUp = false
                    dizzy.jumpLeft = false
                    dizzy.jumpRight = false
                    jumpReset++

                }

                //document.getElementById('help').style.top = dizzy.positionY - 20 + 'px'
                //document.getElementById('help').style.left = dizzy.positionX + 'px'

                xd++
                if (xd == 101)
                    xd = 0
                if (name == "the castle's dungeon") {
                    troll = collTab.find(x => x.name === 'troll')
                    fire = collTab.find(x => x.name === 'fire')
                    rat = collTab.find(x => x.name === 'rat')
                    //troll
                    if (itemTab[0].posX + 10 > troll.posX - 20) {
                        jablko = 'given'

                    }
                    if (dizzy.positionX + 30 > troll.posX && dizzy.positionY > 200 && jablko != 'given') {
                        dizzy.ogreKick = true
                        dizzy.jumpRight = false
                        if (ogreKickEnd) {
                            jumpReset = 0
                            waleSkoka = true
                            dizzy.jumpLeft = true
                            dizzy.fall = false
                            setTimeout(function () { dizzy.fall = true; waleSkoka = false }, 750)
                            ogreKickEnd = false
                        }
                        else {
                            ctx.drawImage(trollKick.img, 90, 136)
                        }
                    }
                    else {
                        dizzy.ogreKick = false
                    }
                    if (jablko == 'given' && trollTalk < 4) {

                        if (trollTalk == 0) {
                            dizzy.talk = true
                            ctx.drawImage(trollText.img, 90, 136)
                            itemTab[0].posX = 5000
                        }
                        else if (trollTalk == 1) {
                            trollText.img.src = 'img/trollText2.png'
                            ctx.drawImage(trollText.img, 90, 136)
                        }
                        else if (trollTalk == 2) {
                            trollText.img.src = 'img/trollText3.png'
                            ctx.drawImage(trollText.img, 90, 136)
                        }
                        else if (trollTalk == 3) {
                            trollText.img.src = 'img/trollText4.png'
                            ctx.drawImage(trollText.img, 90, 136)
                        }
                    }
                    // ogien
                    if (itemTab[1].posX > fire.posX && itemTab[1].posX < fire.posX + 70) {
                        jug = 'given'

                    }
                    if (jug == 'given' && fireTalk < 2) {
                        itemTab[1].posX = 5000
                        trollText.img.src = 'img/fireText1.png'
                        ctx.drawImage(trollText.img, 90, 136)
                    }
                    if (dizzy.positionX <= 80 && (dizzy.positionY > 300 || dizzy.positionY < 300)) {
                        smugglers_hideout();
                        dizzy.positionX = 500
                        dizzy.startingPositionX = 500
                        dizzy.startingPositionY = dizzy.positionY
                    }
                    if (dizzy.positionY < 144) {
                        the_entrance_hall();
                        dizzy.positionY = 340
                        dizzy.startingPositionY = 340
                        dizzy.startingPositionX = 384
                    }
                    if (dizzy.positionX >= 530)
                        dizzy.collRight = true
                    else
                        dizzy.collRight = false
                    if (dizzy.positionX > 80 && dizzy.positionX < 420 && dizzy.positionY <= 152)
                        dizzy.collTop = true
                    else
                        dizzy.colltop = false
                    //szczur
                    if (itemTab[2].posX + 10 > rat.posX && itemTab[2].posY < 200) {
                        bread = 'given'
                        ratAte++
                        if (ratAte > 3)
                            ratAte = 2

                        collTab[16].img.src = 'img/l1/rat1.png'
                    }
                    if (bread == 'given' && ratTalk < 2) {
                        itemTab[2].posX = -5000
                        trollText.img.src = 'img/ratText1.png'
                        ctx.drawImage(trollText.img, 90, 136)
                    }
                    if (bread == 'given' && ratTalk < 1 && ratAte == 1) {
                        ratTalk++
                        dizzy.talk = true

                    }
                }
                else if (name == "smuggler's hideout") {
                    if (dizzy.positionX >= 520 && (dizzy.positionY > 300 || dizzy.positionY < 300)) {
                        the_castle_dungeon();
                        dizzy.positionX = 100
                        dizzy.startingPositionX = 100
                        dizzy.startingPositionY = dizzy.positionY
                    }


                }
                else if (name == "the entrance hall") {
                    if (dizzy.positionY >= 390) {
                        the_castle_dungeon();

                        dizzy.positionY = 150
                        dizzy.startingPositionY = 150
                    }
                    if (dizzy.positionX <= 80)
                        dizzy.collLeft = true
                    else
                        dizzy.collLeft = false
                    if (dizzy.positionX >= 520)
                        dizzy.collRight = true
                    else
                        dizzy.collLRight = false
                }

            }
            setInterval(loop, 40)

            function deathSign(cause) {
                if (cause == 'fire')
                    deathCause.img.src = 'img/deaths/deathFire.png'
                if (cause == 'water')
                    deathCause.img.src = 'img/deaths/deathWater.png'
                if (cause == 'rat')
                    deathCause.img.src = 'img/deaths/deathRat.png'
            }

            function Dizzy() {
                var _this = this
                this.state = 'idle';
                this.positionX = 300;
                this.positionY = 300;
                this.walkLeft = false;
                this.walkRight = false;
                this.jumpUp = false
                this.image = new Image();
                this.ground = false
                this.fall = true
                this.collRight = false
                this.collLeft = false
                this.collTop = false
                this.jumpLeft = false
                this.jumpRight = false
                this.dead = false
                this.startingPositionX = 300
                this.startingPositionY = 300
                this.spawning = true
                this.inventory = false
                this.ogreKick = false
                this.talk = false
                this.animIdle = function (idleFrame) {
                    ctx.drawImage(_this.image, dizzy.positionX, dizzy.positionY - 40);
                    if (idleFrame) {
                        _this.image.src = 'img/dizzy/DizzyIdle-1.png';
                    }
                    else {
                        _this.image.src = 'img/dizzy/DizzyIdle-2.png';
                    }

                }
                this.animWalkLeft = function () {
                    ctx.drawImage(_this.image, dizzy.positionX, dizzy.positionY - 40);

                    if (siema1 == 0) {

                        _this.image.src = 'img/dizzy/dizzyWalkLeft-1.png';
                    }
                    else if (siema1 == 1) {
                        _this.image.src = 'img/dizzy/dizzyWalkLeft-2.png';
                    }
                    else if (siema1 == 2) {
                        _this.image.src = 'img/dizzy/dizzyWalkLeft-3.png';
                    }
                    else if (siema1 == 3) {
                        _this.image.src = 'img/dizzy/dizzyWalkLeft-4.png';
                    }
                    else if (siema1 == 4) {
                        _this.image.src = 'img/dizzy/dizzyWalkLeft-5.png';
                    }
                    else if (siema1 == 5) {
                        _this.image.src = 'img/dizzy/dizzyWalkLeft-6.png';
                    }
                    else if (siema1 == 6) {
                        _this.image.src = 'img/dizzy/dizzyWalkLeft-7.png';
                    }
                    else if (siema1 == 7) {
                        _this.image.src = 'img/dizzy/dizzyWalkLeft-8.png';
                    }
                    if (siema == animFrame)
                        siema1++
                    if (siema1 == 8) {
                        siema1 = 0
                    }

                }
                this.animWalkRight = function () {
                    ctx.drawImage(_this.image, dizzy.positionX, dizzy.positionY - 40);

                    if (siema2 == 0) {

                        _this.image.src = 'img/dizzy/dizzyWalkRight-1.png';
                    }
                    else if (siema2 == 1) {
                        _this.image.src = 'img/dizzy/dizzyWalkRight-2.png';
                    }
                    else if (siema2 == 2) {
                        _this.image.src = 'img/dizzy/dizzyWalkRight-3.png';
                    }
                    else if (siema2 == 3) {
                        _this.image.src = 'img/dizzy/dizzyWalkRight-4.png';
                    }
                    else if (siema2 == 4) {
                        _this.image.src = 'img/dizzy/dizzyWalkRight-5.png';
                    }
                    else if (siema2 == 5) {
                        _this.image.src = 'img/dizzy/dizzyWalkRight-6.png';
                    }
                    else if (siema2 == 6) {
                        _this.image.src = 'img/dizzy/dizzyWalkRight-7.png';
                    }
                    if (siema == animFrame)
                        siema2++
                    if (siema2 == 7) {
                        siema2 = 0
                    }

                }
                this.animJumpUp = function () {
                    ctx.drawImage(_this.image, dizzy.positionX, dizzy.positionY - 40);
                    if (siema3 == 0) {
                        _this.image.src = 'img/dizzy/dizzyJumpUp-1.png'
                    }
                    else if (siema3 == 1) {
                        _this.image.src = 'img/dizzy/dizzyJumpUp-2.png'
                    }
                    else if (siema3 == 2) {
                        _this.image.src = 'img/dizzy/dizzyJumpUp-3.png'
                    }
                    else if (siema3 == 3) {
                        _this.image.src = 'img/dizzy/dizzyJumpUp-4.png'
                    }
                    else if (siema3 == 4) {
                        _this.image.src = 'img/dizzy/dizzyJumpUp-5.png'
                    }
                    else if (siema3 == 5) {
                        _this.image.src = 'img/dizzy/dizzyJumpUp-6.png'
                    }
                    else if (siema3 == 6) {
                        _this.image.src = 'img/dizzy/dizzyJumpUp-7.png'
                    }
                    else if (siema3 == 7) {
                        _this.image.src = 'img/dizzy/dizzyJumpUp-8.png'
                    }


                    if (siema == animFrame - 2)
                        siema3++
                    if (siema3 == 8) {
                        siema3 = 0
                    }


                }
                this.animJumpLeft = function () {
                    ctx.drawImage(_this.image, dizzy.positionX, dizzy.positionY - 40);
                    if (siema4 == 0) {
                        _this.image.src = 'img/dizzy/dizzyJumpLeft-1.png'
                    }
                    else if (siema4 == 1) {
                        _this.image.src = 'img/dizzy/dizzyJumpLeft-2.png'
                    }
                    else if (siema4 == 2) {
                        _this.image.src = 'img/dizzy/dizzyJumpLeft-3.png'
                    }
                    else if (siema4 == 3) {
                        _this.image.src = 'img/dizzy/dizzyJumpLeft-4.png'
                    }
                    else if (siema4 == 4) {
                        _this.image.src = 'img/dizzy/dizzyJumpLeft-5.png'
                    }
                    else if (siema4 == 5) {
                        _this.image.src = 'img/dizzy/dizzyJumpLeft-6.png'
                    }
                    else if (siema4 == 6) {
                        _this.image.src = 'img/dizzy/dizzyJumpLeft-7.png'
                    }

                    if (siema == animFrame - 2)
                        siema4++
                    if (siema4 == 7) {
                        siema4 = 0
                    }
                }
                this.animJumpRight = function () {
                    ctx.drawImage(_this.image, dizzy.positionX, dizzy.positionY - 40);
                    if (siema5 == 0) {
                        _this.image.src = 'img/dizzy/dizzyJumpRight-1.png'
                    }
                    else if (siema5 == 1) {
                        _this.image.src = 'img/dizzy/dizzyJumpRight-2.png'
                    }
                    else if (siema5 == 2) {
                        _this.image.src = 'img/dizzy/dizzyJumpRight-3.png'
                    }
                    else if (siema5 == 3) {
                        _this.image.src = 'img/dizzy/dizzyJumpRight-4.png'
                    }
                    else if (siema5 == 4) {
                        _this.image.src = 'img/dizzy/dizzyJumpRight-5.png'
                    }
                    else if (siema5 == 5) {
                        _this.image.src = 'img/dizzy/dizzyJumpRight-6.png'
                    }
                    else if (siema5 == 6) {
                        _this.image.src = 'img/dizzy/dizzyJumpRight-7.png'
                    }

                    if (siema == animFrame - 2)
                        siema5++
                    if (siema5 == 7) {
                        siema5 = 0
                    }
                }
                this.death = function () {
                    if (particlePos == 0)
                        audio.play();
                    if (siema6 < 5)
                        ctx.drawImage(_this.image, dizzy.positionX, dizzy.positionY - 40);
                    if (siema6 < 10) {
                        ctx.drawImage(particleImg.img, dizzy.positionX + 34 + particlePos, dizzy.positionY - 40 - particlePos);
                        ctx.drawImage(particleImg.img, dizzy.positionX + 34 + particlePos, dizzy.positionY + particlePos);
                        ctx.drawImage(particleImg.img, dizzy.positionX - particlePos, dizzy.positionY + particlePos);
                        ctx.drawImage(particleImg.img, dizzy.positionX - particlePos, dizzy.positionY - 40 - particlePos);
                        particlePos += 6
                    }


                    if (siema6 == 1) {
                        _this.image.src = 'img/dizzy/dizzyDeath-1.png'

                    }
                    else if (siema6 == 2) {
                        _this.image.src = 'img/dizzy/dizzyDeath-2.png'

                    }
                    else if (siema6 == 3) {
                        _this.image.src = 'img/dizzy/dizzyDeath-3.png'

                    }
                    else if (siema6 == 4) {
                        _this.image.src = 'img/dizzy/dizzyDeath-4.png'

                    }
                    if (siema6 > 8 && siema6 < 25) {
                        ctx.drawImage(deathCause.img, 146, 125);
                    }
                    if (siemaDeath == 1) {
                        siema6++

                    }

                    if (siema6 == 25) {
                        deathFin = 1
                    }
                    if (deathFin == 1) {
                        dizzy.dead = false
                        lives -= 1
                        dizzy.positionX = dizzy.startingPositionX
                        dizzy.positionY = dizzy.startingPositionY
                        siema6 = 0
                        deathFin = 0
                        siemaDeath = 0
                        this.spawning = true
                        particlePos = 0
                        dizzy.jumpLeft = false
                        dizzy.jumpRight = false
                        dizzy.jump = false
                        if (lives < 0)
                            location.reload()

                    }


                }
                this.spawn = function () {
                    if (siema7 == 0) {
                        dizzy.positionX = dizzy.startingPositionX
                        dizzy.positionY = dizzy.startingPositionY
                    }



                    if (siema7 == 1 || siema7 == 0) {
                        _this.image.src = 'img/dizzy/dizzyDeath-4.png'

                    }
                    else if (siema7 == 2) {
                        _this.image.src = 'img/dizzy/dizzyDeath-3.png'

                    }
                    else if (siema7 == 3) {
                        _this.image.src = 'img/dizzy/dizzyDeath-2.png'

                    }
                    if (siemaRespawn == 5) {
                        siema7++

                    }
                    if (particlePos2 > 20) {

                        ctx.drawImage(particleImg.img, dizzy.positionX + 34 - particlePos2, dizzy.positionY - 40 + particlePos2);
                        ctx.drawImage(particleImg.img, dizzy.positionX + 34 - particlePos2, dizzy.positionY - particlePos2);
                        ctx.drawImage(particleImg.img, dizzy.positionX + particlePos2, dizzy.positionY - particlePos2);
                        ctx.drawImage(particleImg.img, dizzy.positionX + particlePos2, dizzy.positionY - 40 + particlePos2);
                        ctx.drawImage(dizzy.image, dizzy.positionX, dizzy.positionY - 40);
                        particlePos2 -= 9
                    }
                    else {
                        siema7 = 0
                        particlePos2 = 330
                        siemaRespawn = 0
                        dizzy.spawning = false
                    }


                }
                this.inventoryUi = function () {

                    for (let i = 0; i < itemTab.length; i++) {

                        if (_this.positionX + 20 >= itemTab[i].posX && _this.positionX + 20 <= itemTab[i].posX + itemTab[i].width && _this.positionY - 20 >= itemTab[i].posY - itemTab[i].height && _this.positionY - 20 <= itemTab[i].posY + itemTab[i].height) {
                            if (itemCount < 3)
                                itemCount++
                            if (itemCount < 3) {
                                itemTab[i].inventory = true
                                itemTab[i].posX = 5000
                                itemTab[i].posY = 5000
                                itemTab[i].map = ''
                                inv.push(itemTab[i])
                            }
                            else {
                                itemCount--
                            }
                        }



                    }
                    if (itemCount == 0) {
                        if (siema8 == 0)
                            setTimeout(function () {
                                dizzy.inventory = false; invToggle = false; noEnter = false; siema8 = 0

                            }, 2000)
                        ctx.drawImage(eq4.img, 114, 116)
                        noEnter = true
                        siema8++
                    }
                    else {
                        if (itemCount == 3) {
                            if (siema8 == 0)
                                setTimeout(function () {
                                    dizzy.inventory = false; invToggle = false; noEnter = false; siema8 = 0

                                }, 2000)
                            siema8++
                        }
                        ctx.drawImage(eq.img, 114, 116)
                        if (itemCount > 2) {
                            ctx.drawImage(eq3.img, 178, 276)
                        }
                        else {
                            ctx.drawImage(eq2.img, 178, 276)

                        }



                    }

                    for (let i = 0; i < inv.length; i++) {

                        ctx.font = '14px c64'
                        if (itemCount != 0)
                            if (selected == i)
                                ctx.fillStyle = 'rgb(194,255,255)'
                            else
                                ctx.fillStyle = 'rgb(192,115,188)'

                        ctx.fillText(inv[i].display, 160, 190 + 20 * i)

                        if (selected == 2)
                            ctx.fillStyle = 'rgb(194,255,255)'
                        else
                            ctx.fillStyle = 'rgb(192,115,188)'
                        ctx.fillText("exit and don't drop", 160, 201 + 32)
                    }
                }
            }
            bg.src = 'img/bg.png'

        }
    }
})

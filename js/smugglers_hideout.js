function smugglers_hideout() {
    collTab = []
    name = "smuggler's hideout"
    let floor1 = {}
    floor1.img = new Image();
    floor1.img.src = 'img/l2/floor1.png'
    floor1.height = 16
    floor1.width = 176
    floor1.posX = 384
    floor1.posY = 110
    floor1.collision = true
    collTab.push(floor1)
    let floor2 = {}
    floor2.img = new Image();
    floor2.img.src = 'img/l2/floor2.png'
    floor2.height = 50
    floor2.width = 114
    floor2.posX = 270
    floor2.posY = 144
    floor2.collision = false
    collTab.push(floor2)
    let floor3 = {}
    floor3.img = new Image();
    floor3.img.src = 'img/l2/floor3.png'
    floor3.height = 128
    floor3.width = 190
    floor3.posX = 80
    floor3.posY = 222
    floor3.collision = true
    collTab.push(floor3)


    let floor6 = {}
    floor6.img = new Image();
    floor6.img.src = 'img/l2/floor6.png'
    floor6.height = 48
    floor6.width = 32
    floor6.posX = 478
    floor6.posY = 370
    floor6.collision = true
    collTab.push(floor6)
    let floor7 = {}
    floor7.img = new Image();
    floor7.img.src = 'img/l2/floor7.png'
    floor7.height = 32
    floor7.width = 50
    floor7.posX = 510
    floor7.posY = 370
    floor7.collision = true
    collTab.push(floor7)
    let floor8 = {}
    floor8.img = new Image();
    floor8.img.src = 'img/l2/floor8.png'
    floor8.height = 64
    floor8.width = 16
    floor8.posX = 462
    floor8.posY = 370
    floor8.collision = true
    collTab.push(floor8)

    let floor10 = {}
    floor10.img = new Image();
    floor10.img.src = 'img/l2/floor10.png'
    floor10.height = 128
    floor10.width = 46
    floor10.posX = 400
    floor10.posY = 370
    floor10.collision = true
    collTab.push(floor10)
    let floor11 = {}
    floor11.img = new Image();
    floor11.img.src = 'img/l2/floor11.png'
    floor11.height = 112
    floor11.width = 16
    floor11.posX = 384
    floor11.posY = 370
    floor11.collision = true
    collTab.push(floor11)
    let floor12 = {}
    floor12.img = new Image();
    floor12.img.src = 'img/l2/floor12.png'
    floor12.height = 96
    floor12.width = 16
    floor12.posX = 368
    floor12.posY = 370
    floor12.collision = true
    collTab.push(floor12)
    let floor13 = {}
    floor13.img = new Image();
    floor13.img.src = 'img/l2/floor13.png'
    floor13.height = 80
    floor13.width = 18
    floor13.posX = 350
    floor13.posY = 370
    floor13.collision = true
    collTab.push(floor13)
    let floor14 = {}
    floor14.img = new Image();
    floor14.img.src = 'img/l2/floor14.png'
    floor14.height = 64
    floor14.width = 80
    floor14.posX = 270
    floor14.posY = 370
    floor14.collision = true
    collTab.push(floor14)
    let barrel = {}
    barrel.img = new Image();
    barrel.img.src = 'img/l2/barrel.png'
    barrel.height = 48
    barrel.width = 40
    barrel.posX = 310
    barrel.posY = 306
    barrel.collision = false
    collTab.push(barrel)
    let floor5 = {}
    floor5.img = new Image();
    floor5.img.src = 'img/l2/floor5.png'
    floor5.height = 30
    floor5.width = 18
    floor5.posX = 510
    floor5.posY = 248
    floor5.collision = true
    collTab.push(floor5)
    let floor9 = {}
    floor9.img = new Image();
    floor9.img.src = 'img/l2/floor9.png'
    floor9.height = 96
    floor9.width = 16
    floor9.posX = 446
    floor9.posY = 370
    floor9.collision = true
    collTab.push(floor9)
    let floor4 = {}
    floor4.img = new Image();
    floor4.img.src = 'img/l2/floor4.png'
    floor4.height = 126
    floor4.width = 32
    floor4.posX = 528
    floor4.posY = 280
    floor4.collision = true
    collTab.push(floor4)
    let water = {}
    water.img = new Image();
    water.img.src = 'img/l2/water1.png'
    water.height = 12
    water.width = 192
    water.posX = 80
    water.posY = 334
    water.collision = false
    water.kill = 'water'
    collTab.push(water)

}
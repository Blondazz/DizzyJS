function the_entrance_hall() {
    collTab = []
    name = "the entrance hall"
    let sword1 = {}
    sword1.img = new Image();
    sword1.img.src = 'img/l3/sword1.png'
    sword1.height = 64
    sword1.width = 64
    sword1.posX = 130
    sword1.posY = 162
    sword1.collision = false
    collTab.push(sword1)
    let sword2 = {}
    sword2.img = new Image();
    sword2.img.src = 'img/l3/sword2.png'
    sword2.height = 64
    sword2.width = 64
    sword2.posX = 446
    sword2.posY = 162
    sword2.collision = false
    collTab.push(sword2)
    let torch = {}
    torch.img = new Image();
    torch.img.src = 'img/l1/torch.png'
    torch.height = 48
    torch.width = 16
    torch.posX = 222
    torch.posY = 196
    torch.collision = false
    collTab.push(torch)
    let torch2 = {}
    torch2.img = new Image();
    torch2.img.src = 'img/l1/torch.png'
    torch2.height = 48
    torch2.width = 16
    torch2.posX = 402
    torch2.posY = 196
    torch2.collision = false
    collTab.push(torch2)
    let flame1 = {}
    flame1.img = new Image();
    flame1.img.src = 'img/l1/flame1.png'
    flame1.height = 32
    flame1.width = 16
    flame1.posX = 220
    flame1.posY = 152
    flame1.collision = false
    flame1.kill = 'fire'
    collTab.push(flame1)
    let flame2 = {}
    flame2.img = new Image();
    flame2.img.src = 'img/l1/flame1.png'
    flame2.height = 32
    flame2.width = 16
    flame2.posX = 400
    flame2.posY = 152
    flame2.collision = false
    flame2.kill = 'fire'
    collTab.push(flame2)
    let light = {}
    light.img = new Image();
    light.img.src = 'img/l3/lamp.png'
    light.height = 30
    light.width = 80
    light.posX = 280
    light.posY = 128
    light.collision = false
    collTab.push(light)
    let painting = {}
    painting.img = new Image();
    painting.img.src = 'img/l3/painting.png'
    painting.height = 72
    painting.width = 92
    painting.posX = 274
    painting.posY = 208
    painting.collision = false
    collTab.push(painting)
    let railing = {}
    railing.img = new Image();
    railing.img.src = 'img/l3/railing.png'
    railing.height = 32
    railing.width = 128
    railing.posX = 80
    railing.posY = 210
    railing.collision = false
    collTab.push(railing)
    let railing2 = {}
    railing2.img = new Image();
    railing2.img.src = 'img/l3/railing1.png'
    railing2.height = 32
    railing2.width = 128
    railing2.posX = 432
    railing2.posY = 210
    railing2.collision = false
    collTab.push(railing2)
    let floor1 = {}
    floor1.img = new Image();
    floor1.img.src = 'img/l3/floor1.png'
    floor1.height = 14
    floor1.width = 126
    floor1.posX = 80
    floor1.posY = 224
    floor1.collision = true
    collTab.push(floor1)
    let floor2 = {}
    floor2.img = new Image();
    floor2.img.src = 'img/l3/floor1.png'
    floor2.height = 14
    floor2.width = 126
    floor2.posX = 434
    floor2.posY = 224
    floor2.collision = true
    collTab.push(floor2)
    let staircase = {}
    staircase.img = new Image();
    staircase.img.src = 'img/l3/staircase.png'
    staircase.height = 14
    staircase.width = 126
    staircase.posX = 96
    staircase.posY = 226
    staircase.collision = false
    collTab.push(staircase)
    let floor6 = {}
    floor6.img = new Image();
    floor6.img.src = 'img/l3/floor5.png'
    floor6.height = 32
    floor6.width = 380
    floor6.posX = 80
    floor6.posY = 368
    floor6.collision = true
    collTab.push(floor6)

    let floor3 = {}
    floor3.img = new Image();
    floor3.img.src = 'img/l3/floor2.png'
    floor3.height = 16
    floor3.width = 64
    floor3.posX = 288
    floor3.posY = 256
    floor3.collision = true
    collTab.push(floor3)
    let floor4 = {}
    floor4.img = new Image();
    floor4.img.src = 'img/l3/floor3.png'
    floor4.height = 16
    floor4.width = 128
    floor4.posX = 256
    floor4.posY = 272
    floor4.collision = true
    collTab.push(floor4)
    let floor5 = {}
    floor5.img = new Image();
    floor5.img.src = 'img/l3/floor4.png'
    floor5.height = 16
    floor5.width = 192
    floor5.posX = 224
    floor5.posY = 288
    floor5.collision = true
    collTab.push(floor5)
    let torch3 = {}
    torch3.img = new Image();
    torch3.img.src = 'img/l1/torch.png'
    torch3.height = 48
    torch3.width = 16
    torch3.posX = 100
    torch3.posY = 300
    torch3.collision = false
    collTab.push(torch3)
    let torch4 = {}
    torch4.img = new Image();
    torch4.img.src = 'img/l1/torch.png'
    torch4.height = 48
    torch4.width = 16
    torch4.posX = 522
    torch4.posY = 300
    torch4.collision = false
    collTab.push(torch4)
    let flame3 = {}
    flame3.img = new Image();
    flame3.img.src = 'img/l1/flame1.png'
    flame3.height = 32
    flame3.width = 16
    flame3.posX = 98
    flame3.posY = 256
    flame3.collision = false
    flame3.kill = 'fire'
    collTab.push(flame3)
    let flame4 = {}
    flame4.img = new Image();
    flame4.img.src = 'img/l1/flame1.png'
    flame4.height = 32
    flame4.width = 16
    flame4.posX = 520
    flame4.posY = 256
    flame4.collision = false
    flame4.kill = 'fire'
    collTab.push(flame4)

}
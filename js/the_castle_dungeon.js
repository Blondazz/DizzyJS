let szczurZawroc = 0
function the_castle_dungeon() {
    collTab = []
    name = "the castle's dungeon"
    console.log('elo')
    let floor = {}
    floor.img = new Image();
    floor.img.src = 'img/l1/floor1.png'
    floor.height = 14
    floor.width = 482
    floor.posX = 80
    floor.posY = 366
    floor.collision = true
    collTab.push(floor)
    let fireslope = {}
    fireslope.img = new Image();
    fireslope.img.src = 'img/l1/fireslope.png'
    fireslope.height = 16
    fireslope.width = 64
    fireslope.posX = 79
    fireslope.posY = 352//352
    fireslope.collision = true
    collTab.push(fireslope)
    let floor4 = {}
    floor4.img = new Image();
    floor4.img.src = 'img/l1/floor5.png'
    floor4.height = 14
    floor4.width = 482
    floor4.posX = 80
    floor4.posY = 112
    floor4.collision = true
    collTab.push(floor4)
    let floor5 = {}
    floor5.img = new Image();
    floor5.img.src = 'img/l1/floor4.png'
    floor5.height = 48
    floor5.width = 32
    floor5.posX = 530
    floor5.posY = 142
    floor5.collision = true
    collTab.push(floor5)
    let floor2 = {}
    floor2.img = new Image();
    floor2.img.src = 'img/l1/floor2.png'
    floor2.height = 46
    floor2.width = 480
    floor2.posX = 80
    floor2.posY = 202
    floor2.collision = true
    collTab.push(floor2)
    let floor3 = {}
    floor3.img = new Image();
    floor3.img.src = 'img/l1/floor3.png'
    floor3.height = 82
    floor3.width = 46
    floor3.posX = 80
    floor3.posY = 284
    floor3.collision = true
    collTab.push(floor3)

    let table = {}
    table.img = new Image();
    table.img.src = 'img/l1/table.png'
    table.height = 96
    table.width = 128
    table.posX = 193
    table.posY = 352
    table.collision = false
    collTab.push(table)
    let table2 = {}
    table2.img = new Image();
    table2.img.src = 'img/l1/table2.png'
    table2.height = 32
    table2.width = 64
    table2.posX = 355
    table2.posY = 352
    table2.collision = false
    collTab.push(table2)
    let troll = {}
    troll.img = new Image();
    troll.img.src = 'img/l1/troll.png'
    troll.height = 80
    troll.width = 64
    troll.posX = 437
    troll.name = 'troll'
    troll.posY = 352
    troll.collision = false
    collTab.push(troll)
    let gate = {}
    gate.img = new Image();
    gate.img.src = 'img/l1/gate.png'
    gate.height = 90
    gate.width = 62
    gate.posX = 501
    gate.posY = 352
    gate.collision = false
    collTab.push(gate)
    let skeleton = {}
    skeleton.img = new Image();
    skeleton.img.src = 'img/l1/skeleton.png'
    skeleton.height = 90
    skeleton.width = 62
    skeleton.posX = 344
    skeleton.posY = 294
    skeleton.collision = false
    collTab.push(skeleton)
    let torch = {}
    torch.img = new Image();
    torch.img.src = 'img/l1/torch.png'
    torch.height = 48
    torch.width = 16
    torch.posX = 154
    torch.posY = 288
    torch.collision = false
    collTab.push(torch)
    let torch2 = {}
    torch2.img = new Image();
    torch2.img.src = 'img/l1/torch2.png'
    torch2.height = 32
    torch2.width = 16
    torch2.posX = 477
    torch2.posY = 272
    torch2.collision = false
    collTab.push(torch2)
    let flame1 = {}
    flame1.img = new Image();
    flame1.img.src = 'img/l1/flame1.png'
    flame1.height = 32
    flame1.width = 16
    flame1.posX = 152
    flame1.posY = 244
    flame1.collision = false
    flame1.kill = 'fire'
    collTab.push(flame1)
    let flame2 = {}
    flame2.img = new Image();
    flame2.img.src = 'img/l1/flame1.png'
    flame2.height = 32
    flame2.width = 16
    flame2.posX = 475
    flame2.posY = 244
    flame2.collision = false
    flame2.kill = 'fire'
    collTab.push(flame2)
    let flame3 = {}
    flame3.img = new Image();
    flame3.img.src = 'img/l1/flame3.png'
    flame3.height = 48
    flame3.width = 42
    if (jug != 'given') {
        flame3.posX = 79
        flame3.posY = 336
    }
    flame3.collision = false
    flame3.kill = 'fire'
    flame3.name = 'fire'
    collTab.push(flame3)
    let rat = {}
    rat.img = new Image();
    rat.name = 'rat'
    rat.img.src = 'img/l1/rat1.png'
    rat.height = 14
    rat.width = 62
    if (bread != 'given') {
        rat.posX = 178
        rat.posY = 156
    }

    rat.collision = false
    rat.kill = 'rat'
    collTab.push(rat)
}   
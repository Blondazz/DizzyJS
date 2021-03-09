function items() {
    itemTab = []
    let height = 28
    let width = 30
    let apple = {}
    apple.name = 'apple'
    apple.img = new Image();
    apple.img.src = 'img/items/apple.png'
    apple.display = 'a fresh, green apple'
    apple.inventory = true
    apple.height = 34
    apple.width = 30
    apple.posX = -5000
    apple.posY = -5000
    apple.map = ''
    itemTab.push(apple)
    inv.push(apple)
    let jug = {}
    jug.img = new Image();
    jug.img.src = 'img/items/jug.png'
    jug.name = 'jug'
    jug.display = 'a jug of water'
    jug.inventory = false
    jug.height = 50
    jug.width = 30
    jug.posX = 358
    jug.posY = 292
    jug.map = "the castle's dungeon"
    itemTab.push(jug)
    let bread = {}
    bread.img = new Image();
    bread.img.src = 'img/items/bread.png'
    bread.name = 'bread'
    bread.display = 'a stale loaf of bread'
    bread.inventory = false
    bread.height = 50
    bread.width = 30
    bread.posX = 388
    bread.posY = 300
    bread.map = "the castle's dungeon"
    itemTab.push(bread)
    let boulder = {}
    boulder.img = new Image();
    boulder.img.src = 'img/items/boulder.png'
    boulder.name = 'boulder'
    boulder.display = 'a heavy boulder'
    boulder.inventory = false
    boulder.height = 32
    boulder.width = 30
    boulder.posX = 270
    boulder.posY = 272
    boulder.map = "smuggler's hideout"
    itemTab.push(boulder)


    for (let i = 4; i < itemTab.length; i++) {
        itemTab[i].width = width
    }
}
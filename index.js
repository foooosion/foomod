register("chat", (rank, name, ign) => {
    ChatLib.command('party remove ' + ign)
}).setCriteria("Party > ${rank}${name}: ${ign} :(")

register("chat", (rank, name, ign) => {
    ChatLib.command('party ' + ign)
}).setCriteria("Party > ${rank}${name}: ${ign} :)")

register("chat", (rank, name, ign) => {
    ChatLib.command('party ' + ign)
}).setCriteria("Party > ${rank}${name}: p ${ign}")

register("chat", (rank, name, ign) => {
    ChatLib.command('party remove ' + ign)
}).setCriteria("Party > ${rank}${name}: k ${ign}")

register("chat", (rank, name, ign1, ign2) => {
    ChatLib.command('party remove ' + ign1)
    setTimeout(()=> ChatLib.command('party ' + ign2), 400)
}).setCriteria("Party > ${rank}${name}: -${ign1} +${ign2}")

register("chat", (rank, name, ign2, ign1) => {
    ChatLib.command('party ' + ign2)
    setTimeout(()=> ChatLib.command('party remove ' + ign1), 400)
}).setCriteria("Party > ${rank}${name}: +${ign2} -${ign1}")

let downtime = false

register("worldLoad", () => {
    downtime = false
})

register("chat", (rank, name, message) => {
    if(message == "!downtime"){
        downtime = true
    }
}).setCriteria("Party > ${rank}${name}: ${message}")

register("chat", (rank, name, message) => {
    if(message == "!dt"){
        downtime = true
    }
}).setCriteria("Party > ${rank}${name}: ${message}")

register("chat", () => {
    if(downtime == false){
        setTimeout(()=> ChatLib.command('instancerequeue'), 5000)
    }
}).setCriteria("      CLICK HERE to re-queue into The Catacombs!")
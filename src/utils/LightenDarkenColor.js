export default (color, amount) => {
    // Затемняе/осветляет цвет на amount процентов
    let hasHash = color[0] == "#" ? true : false
    if (hasHash)
        color = color.slice(1)
    let hexColor = parseInt(color, 16)
 
    let r = (hexColor >> 16) * ((amount + 100) / 100)
    let g = ((hexColor >> 8) & 0x00FF) * ((amount + 100) / 100)
    let b = (hexColor & 0x0000FF) * ((amount + 100) / 100)
 
    return (hasHash ? "#" : "")
    + Math.floor(r).toString(16)
    + Math.floor(g).toString(16)
    + Math.floor(b).toString(16)
}
const állatok = ['cica', 'kutya', 'malac', 'csacsi', 'lo', 'szamár']
function init() {
    document.getElementById('body').innerHTML = állatok.map( v =>
        `<div onclick="f('${v}')">${v}</div>`    
    ).join("")
}
function f (a) {
    console.log(a)
}
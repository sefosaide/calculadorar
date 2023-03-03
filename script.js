function inumerar(x){
    var res = document.getElementById('res')
    res.innerHTML += x
}
function limpar(){
    var res = document.getElementById('res')
    res.innerHTML = ''
}
function eliminar(){
    var res = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = res.substring(0, res.length -1)
}
function calcular(){
    var res = document.getElementById('res').innerHTML
    if(res){
        document.getElementById('res').innerHTML = eval(res)
    }
}
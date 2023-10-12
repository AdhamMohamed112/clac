let one = 1
let inp1 = document.querySelector(".inp1");
document.querySelector(".one").onclick = function(){
        inp1.value += 1
}
document.querySelector(".two").onclick = function(){
        inp1.value += 2
}
document.querySelector(".three").onclick = function(){
        inp1.value += 3
}
document.querySelector(".four").onclick = function(){
        inp1.value += 4
}
document.querySelector(".five").onclick = function(){
        inp1.value += 5
}
document.querySelector(".six").onclick = function(){
        inp1.value += 6
}
document.querySelector(".seven").onclick = function(){
        inp1.value += 7
}
document.querySelector(".eight").onclick = function(){
        inp1.value += 8
}
document.querySelector(".nine").onclick = function(){
        inp1.value += 9
}
document.querySelector(".zero").onclick = function(){
        inp1.value += 0
}
document.querySelector(".dot").onclick = function(){
        if(inp1.value == ''){
                inp1.value += '0.'
        }else{
                inp1.value += '.'
        }
}
document.querySelector(".plus").onclick = function(){
        inp1.value += '+'
}
document.querySelector(".minus").onclick = function(){
        inp1.value += '-'
}
document.querySelector(".multi").onclick = function(){
        inp1.value += '*'
}
document.querySelector(".devide").onclick = function(){
        inp1.value += '/'
}
document.querySelector(".ecual").onclick = function(){
        if(inp1.value == ''){
                inp1.value = ''
        }else{
                inp1.value = eval(inp1.value)
        }
}
document.querySelector(".erase").onclick = function(){
        inp1.value = ''
}
document.querySelector(".cor").onclick = function(){
        inp1.value += '%'
}
document.querySelector(".c1").onclick = function(){
        inp1.value += '('
}
document.querySelector(".c2").onclick = function(){
        inp1.value += ')'
}
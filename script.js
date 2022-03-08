
var shapeRadius = 300
var shapePosition = 50
var offsetValue = 0;
var strengthValue = 0;
var orient = 0


function strengthChange(strengthVal){
    document.querySelector('#strength-output').textContent = strengthVal
    if(strengthVal>strengthValue){
        shapeRadius = 300 - (strengthVal * 3)
    }
    if(strengthVal<strengthValue){
        shapeRadius = 300 - (strengthVal * 3)
    }
    if(strengthVal == 0){
        shapeRadius = 300
    }
    if(strengthVal == 100){
        shapeRadius = 0
    }
    setCurve()
    strengthValue = strengthVal
}


function offsetChange(offsetVal){
    document.querySelector('#offset-output').textContent = offsetVal
    if(offsetVal == 0){
        shapePosition = 50
        setCurve(shapeRadius, shapePosition)
        return
    }
    shapePosition = 50 - (offsetVal * .6)
    if(isFloat(shapePosition)){
        shapePosition = shapePosition.toFixed(2);
    }
    setCurve()
    offsetValue = offsetVal
}

function setCurve(){
    document.getElementById('curve-element').style.clipPath =  `
        ellipse(${shapeRadius}% 100% at ${shapePosition}% ${orient}%)`
        
    document.getElementById('css-to-copy').innerHTML =  `
    wave-top{<br>
        clip-path: ellipse(${shapeRadius}% 100% at ${shapePosition}% ${orient}%) <br>
        background-color: #2F3031; <br>
        width: 100%; <br>
        height: 50%; <br>
    }
    `;
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

function copyCss(){
    var css = document.getElementById('css-to-copy').textContent
    navigator.clipboard.writeText(css);
}

function orientationChange(val){
    orient = val
    var cssOr = document.getElementById('curve-division')
    if(val==0){
        cssOr.style.placeItems = 'start'
    }else{
        cssOr.style.placeItems = 'end'
    }
    setCurve()
}
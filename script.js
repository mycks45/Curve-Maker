
var shapeRadius = 300
var shapePosition = 50
var offsetValue = 0;
var strengthValue = 0;
var orient = 0
var colorValue = "#2F3031"


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

    document.getElementById('clipR').textContent = shapeRadius
    document.getElementById('clipP').textContent = shapePosition
    document.getElementById('clipO').textContent = orient
    document.getElementById('colorVal').textContent = colorValue
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

function copyCss(){
    var css = document.getElementById('css-to-copy').textContent
    navigator.clipboard.writeText(css);
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "100",
        "timeOut": "500",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
    toastr.success('Copied!!')
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

function colorChange(val){
    colorValue = val
    document.getElementById('curve-element').style.backgroundColor = val
    setCurve()
}
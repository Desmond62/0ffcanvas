let 
val=document.getElementById('inp');

function cls(){
    val.value=" ";
}

function Add_v(v){
    val.value+=v;
}

function exe(){
    val.value=eval(val.value);
}

function cancel(){
    val.value=val.value.substr(0,val.value.length-1);
}


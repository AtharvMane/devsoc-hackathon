x=4;
var mnth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var a= new Date();
var y= a.getMonth();
var x= a.getFullYear();



function currMonth(){
    document.getElementById('mnth').innerHTML= mnth[y];
    document.getElementById('year').innerHTML= x ;
    
}
function monthChange(){
    if(y<11){
    y=y+1;
    document.getElementById('mnth').innerHTML= mnth[y];
    document.getElementById('year').innerHTML=x;
   
    }
    else{
        x=x+1;
        y=0;
        document.getElementById('mnth').innerHTML= mnth[y];
        document.getElementById('year').innerHTML=x;
    }
}


function notmonthChange(){
    if(y>0){
    y=y-1;
    document.getElementById('mnth').innerHTML= mnth[y];
    document.getElementById('year').innerHTML= x ;
    
    }
    else{
        x=x-1
        y=11;
        document.getElementById('mnth').innerHTML= mnth[y];
        document.getElementById('year').innerHTML= x ;
    }
}

function monthDays(){

    if(x%4 == 0 && y == 1){
        document.getElementById('hide1').style.visibility = "hidden" ;
        document.getElementById('hide2').style.visibility = "hidden" ;
    }
    else if (x%4 != 0 && y==1){
        document.getElementById('hide1').style.visibility = "hidden" ;
        document.getElementById('hide2').style.visibility = "hidden" ;
        document.getElementById('hide3').style.visibility = "hidden" ;

    }
    else if (y==3 || y==5 || y==8 || y==10 ){
        document.getElementById('hide1').style.visibility = "hidden" ;
        document.getElementById('hide2').style.visibility = "visible" ;
        document.getElementById('hide3').style.visibility = "visible" ;
    }
    else{
        document.getElementById('hide1').style.visibility = "visible" ;
        document.getElementById('hide2').style.visibility = "visible" ;
        document.getElementById('hide3').style.visibility = "visible" ;
    }
}






























f=0;
m=0;
function myFunc(){ 
    if (m<100) {
        m=m+10;
        f=f+1;
        document.getElementById('water').style.transition= "1s";
    document.getElementById('water').style.height=m+"%";
    document.getElementById('glassesdrunk').innerHTML= f;
    

    }
    else{
        m=100;
        f=f+1;
        document.getElementById('glassesdrunk').innerHTML= f;
        
    }
    }
    
    function notmyFunc(){ 
        if (m>0 && f<=10) {
            m=m-10;
            f=f-1;
            document.getElementById('water').style.transition= "1s";
        document.getElementById('water').style.height=m+"%"
        document.getElementById('glassesdrunk').innerHTML= f;
        

        }
        else if(f>0){
            a=0;
            f=f-1;
            document.getElementById('glassesdrunk').innerHTML= f;

        }
        else {
            a=0;
            f=0;
            document.getElementById('glassesdrunk').innerHTML= f;
        }
    }
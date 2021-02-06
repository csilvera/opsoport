
var xurl = 'http://localhost/oper/public/lc';
function conexion(){
    
   /* if(navigator.onLine){*/
     
        var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        var r = this.responseText;
        if(this.readyState == 4 && this.status == 200){

            var corr = JSON.parse(this.responseText);
             let est = $('#Estados');
             let pub = $('#Contenido');
             if(this.responseText == '1'){
                $('#Estados').show();
                est.html();
                est.append(`<div class="conexion sinc">Sin resultados</div>`)
                     var s = setTimeout(function(){
                         $('#Estados').hide();
                     },6000);
            }
             else{
                $('#Contenido').empty();
                localStorage.setItem("local", this.responseText);
                pub.html();
        var gr = `
             <div class="T-pr F-pr sm fw-g">Gerencia de Operaciones</div>
            <div class="T-dep F-seg sm fw">Almacen</div>
            <div class="lista sm fw clp">${corr.oper}</div>
            <div class="lista sm fw clp">${corr.mant}</div>
            <div class="lista sm fw clp">${corr.tran}</div>
            <div class="T-dep F-seg sm fw">Transferencia de Materiales</div>
            <div class="lista sm fw clp">${corr.trm}</div>`;
                 pub.append(gr);

            }

        }
    }
    xhttp.open("GET", xurl, true);
    xhttp.send();
        
    /*}
    else{
         let est = $('#Estados');
        $('#Estados').show();
        est.html();
        est.append(`<div class="conexion sinc">Sin conexion de red</div>`)
        var s = setTimeout(function(){
            $('#Estados').hide();
        },6000);*/
    //}
}
$(document).ready(function(){
    $('#Refresh').on('click', function(){
        console.log('clic refresh');
    conexion();
}); m = 1;
$('#Modo').on('click', function(){
    console.log('clic');
     var seudo = localStorage.getItem('mm');
     localStorage.setItem("mm", seudo);
    if(m == 1){
        m=0;
        $('body').css('background-color','#333');
        $('.clp').css('color','#FFF');
        
    }else{
        m=1;
        $('body').css('background-color','#FFF');
        $('.clp').css('color','#333');
    }
});
});

    


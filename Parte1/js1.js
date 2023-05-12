'use strict' ; 

let productos = [] 

productos[0] = ['Silla', 'IMG/silla.png' , 5000 ]; 
productos[1] = ['Mesa', 'IMG/mesa.png', 12500] ; 
productos[2] = ['Cubiertos', 'IMG/cubiertos.png', 1500] ; 
productos[3] = ['Mantel', 'IMG/Mantel.png', 2250] ; 
productos[4] = ['Vaso', 'IMG/vaso.png', 1800] ; 
productos[5] = ['Posa Vasos', 'IMG/posa-vasos.png', 500] ;
productos[6] = ['Servilletero', 'IMG/servilletero.png', 2700 ] ; 
productos[7] = ['Botella', 'IMG/Botella.png', 4000 ] ; 
productos[8] = ['Salero', 'IMG/salero.png', 1000 ] ; 


let MostrarInfo = '' ; 

 function MostrarLaInfo(){ 


    for(let x of productos){ 
    MostrarInfo += '<div> <ul>'; 
    for(let y in x){ 
        if(y == 1){ 
            MostrarInfo += ` <li class="texto"><a href = "" target= ¨_blank¨> <img src ='${x[y]}'>  </a></li> `;
        }else if(y==2){ 
            MostrarInfo += `<li class="texto"> $${x[y]} </li>`
        }else{ 
            MostrarInfo += `<li class="texto"> ${x[y]} </li>`
        }
         
    }

    MostrarInfo += '</ul> </div>' ;  
}

document.getElementById("Info").innerHTML = MostrarInfo ; 



}

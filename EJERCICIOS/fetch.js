// Ejercicio 01
document.getElementById('lista-estudiantes').addEventListener('click', traer);

function traer() {
    fetch('estudiantes.json')
        .then(res => res.json())
        .then(datos => {
            tabla(datos)
        })
}

function tabla(datos) {
    contenido.innerHTML = ''
    for (let valor of datos) {
        contenido.innerHTML += `
          <tr>
          <th>#</th>
          <td>${ valor.id }</td>
          </tr>

          <tr>
          <th>Nombre</th>
          <td>${ valor.nombre }</td>
          </tr>

          <tr>
          <th>Código</th>
          <td>${ valor.codigo }</td>
          </tr>

          <tr>
          <th>Correo</th>
          <td>${ valor.correo }</td>
          </tr>

          <tr>
          <th>Teléfono</th>
          <td>${ valor.telefono }</td>
          </tr>
        `
    }
}
//Ejercicio 02
const table= document.querySelector('#list-product tbody')
function cargarProductos(){

    fetch('data-product2.json')
        .then(resolve=>resolve.text())//formato en el que se deas obtener la info
        .then(dato=>{
            const product= JSON.parse(dato);
            product.forEach(product => {
                const row=document.createElement('tr');
                row.innerHTML+=`
                    <td>${product.nombre}</td>
                    <td>${product.marca}</td>
                    <td>${product.cantidad}</td>
                    <td> S/ ${product.preunitario}</td>
                    <td> S/ ${product.precio}</td>
                    <td><img src ="${product.foto}" width="100" height="100"></td>

                `;
                table.appendChild(row);
            });
        }            
        )// mostramos la info
        .catch(error =>console.log('Ocurrio un error'+error.message))
};

cargarProductos();

//ejercicio 3 

const tablados= document.querySelector('#lista2 tbody');
function cargarProducto2(){

    fetch('data-product3.json')
        .then(resp=>resp.json())//formato en el que se deas obtener la info
        .then(productos => {
                
                for(let valor of productos){
                const row1=document.createElement('tr');
                row1.innerHTML+=`
                   
                    <td>${valor.nombre}</td>
                    <td>${valor.marca}</td>
                    <td>${valor.cantidad}</td>
                    <td> S/ ${valor.preunitario}</td>
                    <td> S/ ${valor.precio}</td>
                    <td><img src ="${valor.foto}" width="100" height="100"></td>

                `;
                tablados.appendChild(row1);
                }
                
            })
                 
        // mostramos la info
        .catch(error2 =>console.log('Ocurrio un error'+error2.message))
};
cargarProducto2();
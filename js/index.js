async function getData(){
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const character = await result.json();
    const arr = ["", "star", "user", "heart", "gamepad", "arrow-up"]
     console.log(character)
     const characterArr = character.results.map(elemento => Object.entries(elemento));
     console.log(characterArr)
     const characterArrSliced = characterArr.slice(0, 6);
     character.results.forEach(element => {
        const randomData = (min, max) => Math.floor(Math.random() * max - min +1) + min;
        const randInt = randomData(1, characterArr.length); 
        const randIndex = randInt;
        for(i = 0; i < characterArrSliced.length; i++){
                if(element.id == i){
                    const box = document.createRange().createContextualFragment(`
                        
                        <div class="grid-box box-${i}"><a href="" class="fa fa-${arr[i]} fa-2x"></a>
                             <img src="${characterArr[randIndex][8][1]}" alt="">
                        </div>
                        
                        `)
                        const stories = document.getElementById('stories');
                        stories.append(box)
                    }
            }
            console.log(characterArr[randIndex][8][1])
        });
}

const btn_validar = document.getElementById('btn-validar');
function validar(e){
e.preventDefault()
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const arr = [];
const messageArr = ["Nombre", "Email", "Mensaje"];
arr.push(nombre, email, mensaje);
for(i = 0; i < arr.length; i++){
    if(arr[i].value == ""){
        swal({
            title: `El campo ${messageArr[i]} no puede estar vacío`,
            icon: "error",
             })
             return false;
    }
}
if(!emailValido(email)){
    swal({
        title: `El campo ${messageArr[1]} no tiene el formato correcto`,
        icon: "error",
         })
         return false;
}
swal({
    title: `Datos enviados satisfactoriamente`,
    icon: "success",
     })
     nombre.value = "";
     email.value = "";
     mensaje.value = "";
     return true;

}
const emailValido = (email) => {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
}

btn_validar.addEventListener("click", validar)

getData()
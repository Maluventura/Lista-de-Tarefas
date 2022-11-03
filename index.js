const input_usuario = document.querySelector(".input_usuario");
const botaoadd = document.querySelector(".botaoadd");
const container_tarefa = document.querySelector(".tarefas_adicionadas");
var  listaTarefas = JSON.parse(localStorage.getItem("listaTarefas")) || []
console.log(listaTarefas)
if(listaTarefas.length >0)populatarefas()

function adicionar(){

 let valorImput = input_usuario.value ;
 
 if( (valorImput !== "" ) && ( valorImput !== null) && (valorImput !== undefined)){
  listaTarefas.push({nome:valorImput, concluido:false})
  atualizalocalstorage()
 input_usuario.value=""
 
 populatarefas()
 }
 
 }
//  Popula atualiza as tarefas conforme lista tarefas
 function populatarefas(){
   let tarefas = ""
   for(let i = 0 ; i < listaTarefas.length;i++){
    let item = listaTarefas[i]
    if(item.concluido){
      tarefas += `<div class="container_tarefa item_clicado">
      <div onclick="marcarTarefa(${i})" class="item-icone" >
        <span class="material-symbols-outlined clicado">
          task_alt
          </span>
      </div>
      <div  class="item-nome"> ${item.nome}</div>
      <div class="item-botao">
        <button class="material-symbols-outlined botao-delete " onclick="deletarTarefa(${i})">
            delete
        </button>
      </div>
    </div>`

    }else{
      tarefas += ` <div  class="container_tarefa">
      <div onclick="marcarTarefa(${i})" class="item-icone" >
        <span class="material-symbols-outlined nao_clicado" >
          circle
          </span>
      </div>
      <div  class="item-nome">${item.nome}</div>
      <div class="item-botao">
        <button class="material-symbols-outlined botao-delete " onclick="deletarTarefa(${i})">
            delete
        </button>
      </div>
    </div></div>`
    }
   
   }
   let container_tarefas = document.querySelector(".tarefas_adicionadas")
   container_tarefas.innerHTML=tarefas
   }

   function deletarTarefa(indice){
      let resultado = listaTarefas.filter((item,i)=>indice!==i)
      listaTarefas= resultado
      populatarefas()
      atualizalocalstorage()
    
   }
 
   input_usuario.addEventListener("keyup", function (event) {
    //SE TECLOU ENTER (13)
    if (event.keyCode === 13) {
      event.preventDefault();
      botaoadd.click();
    }}
   )



function marcarTarefa(index){
listaTarefas[index].concluido=!listaTarefas[index].concluido
populatarefas()
atualizalocalstorage()

}


function atualizalocalstorage() {
  localStorage.setItem("listaTarefas",JSON.stringify(listaTarefas))



}


















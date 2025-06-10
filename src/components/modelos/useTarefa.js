import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useTarefa = () =>{
const [tarefa, setTarefa] = useState(
{
    id: null,
    titulo: "",
    finalizada: false
}    
)
const [listaTarefas, setListaTarefas] = useState(
    () =>{
        const listaTarefas_storage = localStorage.getItem("listaTarefas")
        return listaTarefas_storage?JSON.parse(listaTarefas_storage):[]
    }
)
useEffect(
    () =>{
localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas))
    }, [listaTarefas]
)

const adicionar_tarefa = (titulo) =>{
setTarefa(
    {
id: Math.floor(Math.random()*1000)+1,
titulo: titulo,
finalizada: false
}
)
const novaListaTarefas = [...listaTarefas, tarefa]
setListaTarefas(novaListaTarefas);
alert("Tarefa adicionada com sucesso.");
}

const excluir_tarefa = (idTarefa) =>{
    const novaListaTarefa = listaTarefas.filter(tarefa => tarefa.id !== idTarefa)
setListaTarefas(novaListaTarefa);
alert("Tarefa excluída com sucesso.")
}

const navigate = useNavigate()
const exibir_detalhe_tarefa = (id) =>{
const tarefa = listaTarefas.find(tarefa => tarefa.id === id)
navigate("/tarefaDetalhes", { state:tarefa})
}

const alterar_tarefa = (tarefa_editada) =>{
const novaListaTarefa = listaTarefas.map(tarefa =>{
    if(tarefa.id === tarefa_editada.id){
return tarefa_editada;
    }else{
        return tarefa;
    }
})
setListaTarefas(novaListaTarefa);
alert("Tarefa alterada com sucesso.")
}

return({
    listaTarefas,
    adicionar_tarefa,
    excluir_tarefa,
    exibir_detalhe_tarefa,
    alterar_tarefa
})
}
export default useTarefa;
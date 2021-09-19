const BotaoDeleta = () =>{
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'

    botaoDeleta.addEventListener('click', deletarTerefa)
        console.log('deletado')
   

    return botaoDeleta
}

const deletarTerefa = (evento) => {
    const botaoDeleta = evento.target
   
    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove()
    return botaoDeleta
}

export default BotaoDeleta
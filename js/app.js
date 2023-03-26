'use strict'

const mapa = document.querySelector('#map')


const getEstado = ({ target }) => {

    const estado = target.id.replace('BR-', '')

    // const listarCidades = async (estado) => {
    //     const url = `http://localhost:8080/cidades/${estado}`

    //     const response = await fetch(url)
    //     const data = await response.json()

    //     console.log(data.cidades)
    //     return {
    //         uf: data.uf,
    //         nome: data.descricao,
    //         cidades: data.cidades
    //     }
    // }
    // listarCidades(estado).then((item) => {
    //     console.log(item)
    // })
}

// preencheDados(estado)


mapa.addEventListener('click', getEstado)

    // const container = document.createElement('div')
    // container.classList.add('estado')

    // const uf = document.createElement('div')
    // uf.classList.add('uf')

    // const containerEstado = document.createElement('div')
    // containerEstado.classList.add('container-estado')

    // const info = document.createElement('div')
    // info.classList.add('info')

    // const capital = document.createElement('p')
    // capital.classList.add('capital')

    // const regiao = document.createElement('p')
    // regiao.classList.add('regiao')

    // const div = document.createElement('div')

    // const cidade = document.createElement('p')
    // cidade.classList.add('cidade')

    // const containerCidade = document.createElement('div')
    // containerCidade.classList.add('container-cidade')


    // const ul = document.createElement('ul')
    // ul.classList.add('todas-cidades')

    // container.append(uf, containerEstado)
    // containerEstado.append(info)
    // info.append(capital, regiao)
    // div.append(cidade)
    // containerCidade.append(ul)
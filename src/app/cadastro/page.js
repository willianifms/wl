'use client'

import { useState } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'


export default function Cadastro() {

    const route = useRouter();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [num_inscricao, setNum_inscricao] = useState();


    const cadastrar = (e) => {
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            num_inscricao: num_inscricao
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3003/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }
    return (
        <div className={styles.main}>
        <form className={styles.form} onSubmit={cadastrar}>
          <h1>Cadastrar</h1>
          <input
            placeholder="INFORME O NOME DO ALUNO"
            name="nome"
            type="text"
            onChange={(e) => setNome(e.target.value)}
          /><br/>
      
          <input
            placeholder="INFORME O CURSO"
            name="curso"
            type="text"
            onChange={(e) => setCurso(e.target.value)}
          /><br/>
      
          <input
            placeholder="INFORME Nº DE INSCRIÇÃO"
            name="num_inscricao"
            type="number"
            onChange={(e) => setNum_inscricao(e.target.value)}
          /><br/>
          
          <div className={styles.buttonGroup}>
            <button type="submit">CADASTRAR</button>
            <a href="/">Voltar</a>
          </div>
        </form>
      </div>
      
    );

}
"use client"
import { useRouter } from 'next/navigation';
import styles from './page.module.css'
import Link from 'next/link';

export default async function Home() {
  const router = useRouter();
  const req = await fetch("http://localhost:3003/alunos", {
    cache: "no-cache"
  });
  const alunos = await req.json();
 

  const remover = async (id) => {
    try {
      await fetch("http://localhost:3003/alunos/" + id, {
        method: "DELETE"
      })
      router.refresh()
    } catch {
      alert.arguments("Não foi possivél remover!")
    }
  }
  return (
    <main className={styles.main}>
    <nav className={styles.nav}>
      <h3>Lista de Alunos</h3>
      <h3>
        <Link href="/cadastro">CADASTRAR</Link>
      </h3>
    </nav>

    <section className={styles.alunos}>
      {alunos.map((aluno) => (
        <div className={styles.aa} key={aluno.id}>
          <p>{aluno.nome}</p>
          <p>{aluno.curso}</p>
          <button onClick={() => remover(aluno.id)}>REMOVER</button>
        </div>
      ))}
    </section>
  </main>
  )
}

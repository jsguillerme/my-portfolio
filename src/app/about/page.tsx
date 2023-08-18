'use client'

export default function AboutMe() {
  return (
    <section className="max-w-[1124px] w-full h-full mt-10 max-sm:break-words mx-auto flex flex-col items-start justify-start gap-4 text-white animate-fade-right animate-once animate-ease-in-out font-sans">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-800 bg-clip-text text-transparent px-6 ">
        Sobre mim.
      </h1>
      <div className="w-full bg-zinc-950 flex max-sm:flex-wrap items-start justify-center gap-10 dark:text-zinc-400 text-zinc-800 font-sans text-lg py-10 px-6">
        <img
          src="/profile.jpg"
          alt=""
          width={416}
          height={416}
          className="rounded-lg"
        />
        <p>
          Meu nome é Guilherme, tenho 22 anos.
          <br />
          <br />
          Atualmente sou QA, mas estou estudando para me tornar um desenvolvedor
          front-end. Possuo um pouco mais de 1 ano de{' '}
          <strong className="dark:text-white dark:font-semibold font-bold">
            experiência com testes
          </strong>
          , e já trabalhei com testes manuais e automatizados, sendo os
          automatizados com{' '}
          <strong className="dark:text-white dark:font-semibold font-bold">
            Cypress
          </strong>
          .
          <br />
          <br />
          Quando não estou trabalhando, estou estudando ReactJS, NextJS,
          Typescript, Tailwind e ultimamente, VueJS.
          <br />
          <br />
          Por conta do meu atual trabalho na{' '}
          <strong className="dark:text-white dark:font-semibold font-bold">
            TALLOS
          </strong>
          , tenho conhecimento em{' '}
          <span className="italic">
            Javascript, VueJS, MongoDB, NodeJS e Express.
          </span>{' '}
          Já que são tecnologias que tenho contato diariamente. Além de atuar
          com testes, também tenho uma partipação ativa em processos, reuniões
          de planejamento, tomadas de decisões.
        </p>
      </div>
    </section>
  )
}

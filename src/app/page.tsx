export default function Home() {
  return (
    <section className="max-w-[1124px] w-full h-full max-sm:break-words mx-auto flex flex-col items-start justify-center gap-4 text-white">
      <h1 className="bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent text-5xl font-sans font-bold animate-fade-right animate-once animate-ease-in-out">
        Guilherme Andrade
      </h1>

      <span className="flex flex-col items-start dark:text-gray-300 text-zinc-900 font-semibold justify-center gap-1 p-2 tracking-wide font-mono animate-fade-right animate-once animate-ease-in-out">
        <p>Quality Assurance | Front-end Developer at TALLOS </p>
        <span className="text-zinc-900/70 dark:text-zinc-500">
          Um profissional voltado para a qualidade de software, atuando em
          desenvolvimento e testes de software.
        </span>
      </span>

      <button className="font-mono flex items-center justify-center gap-2 font-bold dark:hover:bg-zinc-700/50 hover:bg-slate-500/80 transition-all duration-300 rounded-md p-3 animate-fade-right animate-once animate-ease-in-out text-zinc-900 dark:text-white">
        Pressione{' '}
        <kbd className="bg-gray-400 px-2 rounded-md text-black hover:bg-gray-300">
          Ctrl
        </kbd>
        <kbd className="bg-gray-400 px-2 rounded-md text-black hover:bg-gray-300">
          K
        </kbd>
        para iniciar
      </button>
    </section>
  )
}

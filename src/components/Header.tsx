import { Mail } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <div className="max-w-[1124px] mx-auto w-full min-h-[128px] max-h-32 px-8 max-sm:p-4 flex items-center justify-between max-sm:h-fit max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-4">
      <Link href="/" title="Voltar ao início">
        <img src="/logo-gradient.png" width={32} height={32} alt="" />
      </Link>

      <div className="flex items-center justify-between gap-4 dark:text-neutral-400 text-zinc-900 max-sm:w-full font-light font-mono">
        <Link
          href="/about"
          className="dark:hover:text-neutral-200 transition-all duration-200 w-32 dark:hover:bg-zinc-700/50 hover:bg-slate-400/60 py-2 text-center rounded-md"
        >
          Sobre
        </Link>
        <Link
          href="/projects"
          className="dark:hover:text-neutral-200 transition-all duration-200 w-32 dark:hover:bg-zinc-700/50 hover:bg-slate-400/60 py-2 text-center rounded-md"
        >
          Projetos
        </Link>
        <Link
          href="/experience"
          className="dark:hover:text-neutral-200 transition-all duration-200 w-32 dark:hover:bg-zinc-700/50 hover:bg-slate-400/60 py-2 text-center rounded-md"
        >
          Experiência
        </Link>
      </div>

      <a
        title="Entrar em contato"
        href="mailto:guilhermegm.andrade@gmail.com"
        className="dark:text-neutral-400 dark:hover:text-neutral-200 transition-all duration-150 hover:scale-125 text-4xl max-sm:hidden"
      >
        <Mail xlinkTitle="Entrar em contato" />
      </a>
    </div>
  )
}

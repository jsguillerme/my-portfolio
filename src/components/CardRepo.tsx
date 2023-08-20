import { BookMarked, ExternalLink } from 'lucide-react'

interface CardRepoProps {
  repo: {
    id: number
    name: string
    description: string
    html_url: string
    language: string
    visibility: string
  }
}

export default function CardRepo({ repo }: CardRepoProps) {
  return (
    <div className="w-[440px] h-36 dark:bg-slate-600/30 bg-slate-300 rounded-md border dark:border-zinc-500/50 flex flex-col items-center justify-start p-4 font-mono gap-2 dark:hover:bg-slate-600/40 hover:bg-slate-400/50 transition-all duration-300 cursor-pointer">
      <div className="w-full flex items-center justify-between">
        <div className="w-full flex items-center justify-start gap-2">
          <BookMarked width={16} height={16} className="text-zinc-500" />
          <a
            href={repo.html_url}
            target="_blank"
            className="font-semibold text-sky-600 hover:underline hover:underline-offset-2 "
            rel="noreferrer"
          >
            {repo.name}
          </a>
          <span className="border rounded-full text-xs py-1 px-2 text-zinc-600 border-zinc-600 font-bold">
            {repo.visibility}
          </span>
        </div>
        <a
          href={repo.html_url}
          target="_blank"
          className="hover:brightness-75 transition-all duration-300"
          rel="noreferrer"
        >
          <ExternalLink width={16} height={16} className="text-zinc-400" />
        </a>
      </div>

      <section className="text-xs w-full overflow-y-hidden text-ellipsis dark:text-zinc-400 text-gray-800">
        {repo.description}
      </section>

      <footer className="w-full flex items-center justify-start gap-1 text-sm dark:text-zinc-300 text-gray-800">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
          <span>{repo.language || ''}</span>
        </div>
      </footer>
    </div>
  )
}

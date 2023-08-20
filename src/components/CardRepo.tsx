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
    <div className="w-[440px] h-36 bg-slate-600/30 rounded-md border border-zinc-500/50 flex flex-col items-center justify-start p-4 font-mono gap-2 hover:bg-slate-600/40 transition-all duration-300 cursor-pointer">
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
          className="hover:brightness-75"
          rel="noreferrer"
        >
          <ExternalLink width={16} height={16} className="text-zinc-400" />
        </a>
      </div>

      <section className="text-xs w-full overflow-y-hidden text-ellipsis text-zinc-400">
        {repo.description}
      </section>

      <footer className="w-full flex items-center justify-start gap-1 text-sm text-zinc-300">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
          <span>{repo.language || ''}</span>
        </div>
      </footer>
    </div>
  )
}

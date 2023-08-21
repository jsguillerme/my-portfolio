import CardRepo from '@/components/CardRepo'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

async function GetSomeRepos() {
  const oneRepo = await fetch(
    'https://api.github.com/repos/jsguillerme/clone-spotify-vue',
  )
  const twoRepo = await fetch(
    'https://api.github.com/repos/jsguillerme/rocketseat-challenge-github-blog',
  )
  const threeRepo = await fetch(
    'https://api.github.com/repos/jsguillerme/my-pokedex',
  )
  const fourRepo = await fetch(
    'https://api.github.com/repos/jsguillerme/letsTalk',
  )
  const fiveRepo = await fetch(
    'https://api.github.com/repos/jsguillerme/todo-daily',
  )
  const sixRepo = await fetch(
    'https://api.github.com/repos/jsguillerme/finance-app',
  )

  const repos = await Promise.all([
    oneRepo,
    twoRepo,
    threeRepo,
    fourRepo,
    fiveRepo,
    sixRepo,
  ])

  const reposJson = await Promise.all(repos.map((repo) => repo.json()))

  return reposJson
}

export default async function ProjectsPage() {
  const repos = await GetSomeRepos()

  return (
    <section className="max-w-[1124px] w-full h-full mt-10 max-sm:break-words mx-auto flex flex-col items-start justify-start gap-6 text-white animate-fade-right animate-once animate-ease-in-out font-sans">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-800 bg-clip-text text-transparent px-6">
        Projetos.
      </h1>

      <div className="w-full flex gap-4 flex-wrap justify-center items-centermy-4 dark:bg-zinc-950 ">
        {repos.map((repo) => {
          return <CardRepo key={repo.id} repo={repo} />
        })}
      </div>
    </section>
  )
}

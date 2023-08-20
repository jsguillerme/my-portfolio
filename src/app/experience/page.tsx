export default function ProjectPage() {
  return (
    <section className="max-w-[1124px] w-full h-full mt-10 max-sm:break-words mx-auto flex flex-col items-start justify-start gap-4 text-white animate-fade-right animate-once animate-ease-in-out font-sans">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-800 bg-clip-text text-transparent px-6">
        Experiências.
      </h1>

      <div className="flex flex-col items-start justify-center gap-16 h-3/4 max-sm:h-full relative w-full dark:text-zinc-300 text-zinc-700">
        <div className="border-l-8 border-l-zinc-700 rounded-tl-md rounded-bl-md flex flex-col gap-3 pl-3">
          <h2 className="text-lg font-semibold">QA Junior 3</h2>
          <span className="text-sm flex items-center gap-2">
            <a
              href="#"
              className="underline underline-offset-2 dark:text-zinc-300 text-zinc-700 font-bold"
            >
              TALLOS
            </a>
            <p className="w-1 h-1 bg-zinc-400 rounded-full"></p>{' '}
            <p className="dark:text-zinc-400 text-zinc-700">Fortaleza, CE</p>
          </span>
          <span className="text-sm dark:text-zinc-400 text-zinc-600 flex items-center gap-2">
            abr 2023 - Momento{' '}
            <p className="w-1 h-1 bg-zinc-400 rounded-full"></p>{' '}
            <strong>4 meses</strong>
          </span>
        </div>
        <div className="border-l-8 border-l-zinc-700 rounded-tl-md rounded-bl-md flex flex-col gap-3 pl-3">
          <h2 className="text-lg font-semibold">QA Trainee</h2>
          <span className="text-sm flex items-center gap-2">
            <a
              href="#"
              className="underline underline-offset-2 dark:text-zinc-300 text-zinc-700 font-bold"
            >
              TALLOS
            </a>
            <p className="w-1 h-1 bg-zinc-400 rounded-full"></p>{' '}
            <p className="dark:text-zinc-400 text-zinc-700">Fortaleza, CE</p>
          </span>
          <span className="text-sm dark:text-zinc-400 text-zinc-600 flex items-center gap-2">
            jul 2022 - abr 2023{' '}
            <p className="w-1 h-1 bg-zinc-400 rounded-full"></p>{' '}
            <strong>9 meses</strong>
          </span>
        </div>
        <div className="border-l-8 border-l-zinc-700 rounded-tl-md rounded-bl-md flex flex-col gap-3 pl-3">
          <h2 className="text-lg font-semibold">Customer Experience</h2>
          <span className="text-sm flex items-center gap-2">
            <a
              href="#"
              className="underline underline-offset-2 dark:text-zinc-300 text-zinc-700 font-bold"
            >
              TALLOS
            </a>
            <p className="w-1 h-1 bg-zinc-400 rounded-full"></p>{' '}
            <p className="dark:text-zinc-400 text-zinc-700">Fortaleza, CE</p>
          </span>
          <span className="text-sm dark:text-zinc-400 text-zinc-600 flex items-center gap-2">
            nov 2021 - jul 2022{' '}
            <p className="w-1 h-1 bg-zinc-400 rounded-full"></p>{' '}
            <strong>9 meses</strong>
          </span>
        </div>

        <img
          src="/dots.png"
          alt="points"
          className="absolute h-[600px] w-[600px] opacity-40 right-0 animate-spin animate-duration-[12000ms] max-sm:hidden"
        />
      </div>
    </section>
  )
}

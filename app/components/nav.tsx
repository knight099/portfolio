import Link from 'next/link'

const navItems = {
  '/': { name: 'home' },
  '/experience': { name: 'experience' },
  '/blog': { name: 'projects' },
}

const socialItems = {
  'https://drive.google.com/file/d/1wrSXSmY0oqvylNa-BbD1W8WwYRAMIhVO/view?usp=drive_link':
    { name: 'resume' },
  'https://github.com/knight099': { name: 'github' },
  'https://www.linkedin.com/in/vkrishna0': { name: 'linkedin' },
}

export function Navbar() {
  return (
    <header className="tracking-tight lg:sticky lg:top-12 lg:h-[calc(100vh-6rem)] lg:w-56 lg:shrink-0 lg:flex lg:flex-col lg:justify-between mb-10 lg:mb-0">
      <div>
        <Link href="/" className="inline-block">
          <h2 className="text-xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100">
            Vaibhaw Krishna
          </h2>
        </Link>
        <p className="mt-1.5 font-mono text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
          Software Engineer
        </p>

        <nav
          className="mt-6 flex flex-row gap-1 overflow-x-auto fade lg:flex-col lg:gap-0.5 lg:overflow-visible lg:mt-8"
          id="nav"
        >
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 flex align-middle relative py-1.5 px-2 -mx-2 lg:px-2 rounded"
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-6 lg:mt-0 flex flex-row gap-4 lg:flex-col lg:gap-2">
        {Object.entries(socialItems).map(([href, { name }]) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
          >
            {name}
          </a>
        ))}
      </div>
    </header>
  )
}

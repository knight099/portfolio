import { ProjectTimeline } from 'app/components/posts'

export const metadata = {
  title: 'Projects',
  description: 'Projects designed and shipped end to end.',
}

export default function Page() {
  return (
    <section>
      <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500 mb-3">
        Selected work
      </p>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <ProjectTimeline />
    </section>
  )
}

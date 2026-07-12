import { ExperienceTimeline } from 'app/components/posts'

export const metadata = {
  title: 'Experience',
  description: 'Roles, scope, and impact.',
}

export default function Page() {
  return (
    <section>
      <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500 mb-3">
        Career
      </p>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Experience</h1>
      <ExperienceTimeline />
    </section>
  )
}

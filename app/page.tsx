import { ExperienceTimeline, ProjectTimeline } from 'app/components/posts'

const stats = [
  { label: 'Years shipping production systems', value: '4+' },
  { label: 'Events/day on platforms I’ve built', value: '500K+' },
  { label: 'Faster deploys after CI/CD rebuild', value: '44%' },
]

const stack = [
  { label: 'Languages', items: ['Python', 'Go', 'TypeScript', 'Dart'] },
  { label: 'Backend', items: ['Flask', 'FastAPI', 'Django', 'GraphQL', 'Kafka'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'Flutter'] },
  { label: 'Cloud & Infra', items: ['AWS', 'Docker', 'Kubernetes', 'PostgreSQL'] },
  { label: 'AI/ML', items: ['LangChain', 'RAG', 'Agentic AI', 'MCP'] },
]

export default function Page() {
  return (
    <section>
      <p className="mb-8 max-w-[62ch] text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {`I design and own backend systems end to end — from architecture and data
        pipelines to the infra they run on. Most recently I've built an analytics
        platform processing 500K+ events/day and led a monolith-to-microservices
        migration across 5+ teams at TCS. I work primarily in Python and Go, with
        React/Next.js and Flutter for the surfaces on top.`}
      </p>

      <dl className="mb-10 grid grid-cols-3 gap-4 border-y border-neutral-200 dark:border-neutral-800 py-5">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              {stat.value}
            </dt>
            <dd className="mt-1 text-xs text-neutral-500 dark:text-neutral-500 leading-snug">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mb-10">
        <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
          Stack
        </h2>
        <div className="flex flex-col gap-2">
          {stack.map((group) => (
            <div key={group.label} className="flex flex-col sm:flex-row sm:items-baseline gap-x-3 gap-y-1">
              <span className="w-28 shrink-0 text-xs text-neutral-500 dark:text-neutral-500">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-neutral-200 dark:border-neutral-800 px-1.5 py-0.5 font-mono text-xs text-neutral-700 dark:text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10">
        <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
          Experience
        </h2>
        <ExperienceTimeline />
      </div>

      <div className="my-10">
        <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
          Projects
        </h2>
        <ProjectTimeline />
      </div>
    </section>
  )
}

import Link from 'next/link'
import { ExperienceTimeline } from 'app/components/posts'

const stats = [
  { label: 'Years shipping production systems', value: '4+' },
  { label: 'Events/day on platforms I’ve built', value: '500K+' },
  { label: 'Faster deploys after CI/CD rebuild', value: '44%' },
]

const selectedWork = [
  {
    slug: 'nightwatch',
    icon: '🌙',
    name: 'Nightwatch',
    tagline: 'AI video intelligence at the edge',
    summary:
      'Motion-gated edge pipeline that turns CCTV feeds into real events — YOLO and Gemini Vision run on-premises, so only event payloads and snapshots leave the building.',
    pipeline: ['Camera', 'Motion Gate', 'YOLO', 'Gemini Vision', 'Event', 'Cloud'],
    stack: ['Go', 'Python', 'FastAPI', 'YOLO', 'Gemini Vision', 'WebRTC', 'Redis'],
    github: 'https://github.com/knight099/nightfury',
    live: 'https://nightfury-beta.vercel.app/',
  },
  {
    slug: 'spatial',
    icon: '◈',
    name: 'Spatial',
    tagline: 'Deterministic spatial computing infrastructure',
    summary:
      'A sensor-agnostic foundation for perception and physical-world interfaces — typed world model, replaceable device adapters, running on nothing more than a webcam and a projector.',
    pipeline: ['Sensors', 'Perception', 'SpatialWorld', 'Interaction', 'Projection'],
    stack: ['Python', 'FastAPI', 'WebSocket', 'React', 'Computer Vision'],
    github: 'https://github.com/knight099/spatial',
  },
  {
    slug: 'streamshort',
    icon: '⚡',
    name: 'Streamshort',
    tagline: 'Video infrastructure + creator monetization',
    summary:
      'Go backend for short-form video streaming — uploads, HLS delivery over CloudFront, subscriptions and creator payouts, deployed with a full CI/CD pipeline on AWS App Runner.',
    pipeline: ['Creator', 'Upload', 'Processing', 'Storage', 'HLS', 'Viewer'],
    stack: ['Go', 'PostgreSQL', 'HLS', 'AWS', 'Razorpay'],
    github: 'https://github.com/knight099/streamshort',
  },
  {
    slug: 'influenzer',
    icon: '◆',
    name: 'Influenzer',
    tagline: 'Creator × brand marketplace',
    summary:
      'Clean-architecture Go service behind a B2B creator marketplace — campaigns, proposals, real-time messaging, and a Razorpay escrow/wallet system underneath.',
    pipeline: ['Brand', 'Campaign', 'Creator', 'Proposal', 'Escrow', 'Payout'],
    stack: ['Go', 'PostgreSQL', 'WebSockets', 'S3', 'Razorpay'],
    github: 'https://github.com/knight099/influenzer',
  },
]

const otherExperiments = [
  { name: 'GetColabb', href: '/blog/getcolabb' },
  { name: 'Episodd', href: '/blog/episodd' },
  { name: 'Plant AI Assistant', href: '/blog/static-typing' },
  { name: 'TheLastTrade.com', href: '/blog/thelassttrade' },
  { name: 'JurisAI', href: '/blog/spaces-vs-tabs' },
]

const exploring = [
  {
    name: 'AI Agents',
    detail: 'Reliable tool use, evaluation, memory and orchestration.',
  },
  {
    name: 'Edge AI',
    detail: 'Running intelligence closer to physical data sources.',
  },
  {
    name: 'Spatial Computing',
    detail: 'Sensors, perception, world models and physical interfaces.',
  },
  {
    name: 'Distributed Systems',
    detail: 'Reliability, event-driven architecture and real-time infrastructure.',
  },
]

const stack = [
  { label: 'Systems', items: ['Go', 'Python', 'PostgreSQL', 'Kafka', 'Redis'] },
  { label: 'AI', items: ['Computer Vision', 'LLMs', 'RAG', 'Agents'] },
  { label: 'Infrastructure', items: ['AWS', 'Docker', 'Kubernetes'] },
  { label: 'Product', items: ['Next.js', 'React', 'Flutter'] },
]

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
      {children}
    </h2>
  )
}

function Pipeline({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-neutral-500 dark:text-neutral-500">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-1.5">
          <span className="rounded border border-neutral-200 dark:border-neutral-800 px-1.5 py-0.5 text-neutral-700 dark:text-neutral-300">
            {step}
          </span>
          {i < steps.length - 1 && <span>→</span>}
        </span>
      ))}
    </div>
  )
}

function WorkCard({ project, featured }: { project: typeof selectedWork[number]; featured?: boolean }) {
  return (
    <div
      className={
        featured
          ? 'rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/60 backdrop-blur-sm p-5 sm:p-6'
          : 'rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/60 backdrop-blur-sm p-5'
      }
    >
      <div className="flex items-baseline gap-2">
        <span className="text-lg">{project.icon}</span>
        <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
          {project.name}
        </h3>
      </div>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{project.tagline}</p>
      <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
        {project.summary}
      </p>
      <div className="mt-4">
        <Pipeline steps={project.pipeline} />
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded border border-neutral-200 dark:border-neutral-800 px-1.5 py-0.5 font-mono text-xs text-neutral-700 dark:text-neutral-300"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <Link
          href={`/blog/${project.slug}`}
          className="text-neutral-600 dark:text-neutral-400 underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          Architecture
        </Link>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 dark:text-neutral-400 underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 dark:text-amber-500 underline underline-offset-2 decoration-amber-600/40 dark:decoration-amber-500/40 hover:decoration-amber-600 dark:hover:decoration-amber-500"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <section>
      {/* Hero */}
      <p className="mb-3 max-w-[62ch] text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {`I build AI-powered systems, distributed infrastructure, and products
        that interact with the real world — from edge AI and computer vision
        to spatial computing, real-time systems, and production backends.`}
      </p>
      <p className="mb-8 font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
        Research → Architecture → Build → Measure → Ship
      </p>

      <dl className="mb-12 grid grid-cols-3 gap-4 border-y border-neutral-200 dark:border-neutral-800 py-5">
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

      {/* Selected Work */}
      <div className="mb-12">
        <SectionHeading>Selected Work</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {selectedWork.map((project) => (
            <WorkCard key={project.slug} project={project} featured />
          ))}
        </div>

        <div className="mt-6">
          <h3 className="mb-2 text-sm text-neutral-500 dark:text-neutral-500">Other experiments</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
            {otherExperiments.map((item, i) => (
              <span key={item.name} className="flex items-center gap-4">
                <Link
                  href={item.href}
                  className="text-neutral-600 dark:text-neutral-400 underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                  {item.name}
                </Link>
                {i < otherExperiments.length - 1 && (
                  <span className="text-neutral-300 dark:text-neutral-700">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Research */}
      <div className="mb-12">
        <SectionHeading>Research</SectionHeading>
        <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/60 backdrop-blur-sm p-5">
          <h3 className="font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">
            Edge AI for Real-Time Video Intelligence
          </h3>
          <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {`Can motion-gated edge detection cut the cost and latency of
            multimodal video AI without losing accuracy? Nightwatch's pipeline
            runs cheap local detection first and only escalates to Gemini
            Vision when something actually moves — instead of sending every
            frame straight to a multimodal model.`}
          </p>
          <div className="mt-4 flex flex-col gap-2 font-mono text-xs text-neutral-500 dark:text-neutral-500">
            <Pipeline steps={['Camera', 'Motion', 'YOLO', 'Gemini']} />
            <span className="text-neutral-400 dark:text-neutral-600">vs.</span>
            <Pipeline steps={['Camera', 'Gemini']} />
          </div>
          <p className="mt-4 font-mono text-xs text-neutral-400 dark:text-neutral-600">
            Measuring: Latency · Cost · Bandwidth · Accuracy
          </p>
        </div>
      </div>

      {/* How I Build */}
      <div className="mb-12">
        <SectionHeading>How I Build</SectionHeading>
        <p className="max-w-[60ch] text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          {`I prefer difficult problems over fashionable technologies. I start
          with the problem, research the constraints, build the smallest
          useful system, measure it, and iterate.`}
        </p>
        <p className="mt-3 font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
          Problem → Research → Architecture → Prototype → Measure → Ship
        </p>
      </div>

      {/* Experience */}
      <div className="mb-12">
        <SectionHeading>Experience</SectionHeading>
        <ExperienceTimeline />
      </div>

      {/* Currently Exploring */}
      <div className="mb-12">
        <SectionHeading>Currently Exploring</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {exploring.map((item) => (
            <div key={item.name}>
              <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stack */}
      <div className="mb-12">
        <SectionHeading>Stack</SectionHeading>
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

      {/* Contact CTA */}
      <div className="mb-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/60 backdrop-blur-sm p-5 sm:p-6">
        <h2 className="font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
          Building something technically difficult?
        </h2>
        <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          {`I'm interested in AI infrastructure, intelligent systems, spatial
          computing, distributed systems and ambitious early-stage products.`}
        </p>
        <a
          href="mailto:vaibhaw.krishna.1@gmail.com"
          className="mt-3 inline-block text-sm font-medium text-amber-600 dark:text-amber-500 underline underline-offset-2 decoration-amber-600/40 dark:decoration-amber-500/40 hover:decoration-amber-600 dark:hover:decoration-amber-500"
        >
          Let's talk →
        </a>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
          <a
            href="https://github.com/knight099"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            GitHub
          </a>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <a
            href="https://x.com/vkrishna0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            X
          </a>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <a
            href="https://www.linkedin.com/in/vkrishna0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            LinkedIn
          </a>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <a
            href="mailto:vaibhaw.krishna.1@gmail.com"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
}

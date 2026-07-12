import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

function PostList({
  posts,
  order,
}: {
  posts: ReturnType<typeof getBlogPosts>
  order?: string[]
}) {
  let sorted = posts.sort((a, b) => {
    if (order) {
      let ai = order.indexOf(a.slug)
      let bi = order.indexOf(b.slug)
      if (ai !== -1 || bi !== -1) {
        if (ai === -1) return 1
        if (bi === -1) return -1
        return ai - bi
      }
    }
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })

  return (
    <ol className="relative border-l border-neutral-200 dark:border-neutral-800 ml-1">
      {sorted.map((post) => (
        <li key={post.slug} className="relative pl-6 pb-8 last:pb-0 group">
          <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-700 ring-4 ring-white dark:ring-black transition-colors group-hover:bg-amber-500" />
          <Link href={`/blog/${post.slug}`} className="block">
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
              {post.metadata.dateRange || formatDate(post.metadata.publishedAt, false)}
            </p>
            <h3 className="mt-1 font-medium text-neutral-900 dark:text-neutral-100 tracking-tight transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-500">
              {post.metadata.title}
            </h3>
            {post.metadata.summary && (
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-[60ch]">
                {post.metadata.summary}
              </p>
            )}
            {post.metadata.stack && (
              <p className="mt-2 font-mono text-xs text-neutral-400 dark:text-neutral-600">
                {post.metadata.stack}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ol>
  )
}

export function ExperienceTimeline() {
  let experience = getBlogPosts().filter(
    (post) => post.metadata.type === 'experience'
  )
  return <PostList posts={experience} />
}

const PROJECT_ORDER = ['nightwatch', 'getcolabb', 'episodd']

export function ProjectTimeline() {
  let projects = getBlogPosts().filter(
    (post) => post.metadata.type !== 'experience'
  )
  return <PostList posts={projects} order={PROJECT_ORDER} />
}

export function BlogPosts() {
  return <PostList posts={getBlogPosts()} />
}

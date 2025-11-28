import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Vaibhaw Krishna
      </h1>
      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
        Software Engineer • Backend & Microservices Specialist
      </p>
      <p className="mb-4">
        {`Experienced software engineer specializing in backend development and microservices architecture. 
        I build scalable, efficient applications using Python, Go, Java, and modern web technologies. 
        With expertise spanning Flask, Django, React, Next.js, and cloud-native tools like Kubernetes and AWS, 
        I deliver high-performance APIs and end-to-end solutions.`}
      </p>
      
      <div className="my-6">
        <h2 className="mb-3 text-lg font-medium">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">Python</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">Go</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">Java</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">TypeScript</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">Flask</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">Django</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">React</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">Next.js</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">Node.js</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">Flutter</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">MongoDB</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">MySQL</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">Docker</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">Kubernetes</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">AWS</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">Kafka</span>
        </div>
      </div>

      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
        Check out my projects and experience below 👇
      </p>
      
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

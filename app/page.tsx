import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`A skilled Software Engineer specializing in backend development and microservices. 
          With a strong foundation in Python, Flask, and scalable system design, I excel at building high-performance APIs,
          optimizing cloud deployments, and implementing end-to-end solutions for diverse industries.
          I’m passionate about solving complex problems, contributing to innovative projects, and exploring cutting-edge technologies 
          like AI and cloud-native tools. Browse my portfolio to see my work, including projects like Plant AI Assistant, 
          JurisAI, and more, showcasing my expertise in frameworks like Next.js, MERN, and Kubernetes. Let’s build something extraordinary 
          together!
          CLICK BELOW👇`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

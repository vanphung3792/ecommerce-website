const Blog = () => {
  return (
    <div className="home-blog">
      <div className="home-blog-title">
        <h2>Blog</h2>
        <button className="text-accent">See all</button>
      </div>
      <div className="blog-posts">
        <div className="blog-post">
          <img src="https://source.unsplash.com/400x400/?nature" alt="Nature" />
          <h3>Post Title</h3>
          <p>Post excerpt</p>
        </div>
        <div className="blog-post">
          <img src="https://source.unsplash.com/400x400/?technology" alt="Technology" />
          <h3>Post Title</h3>
          <p>Post excerpt</p>
        </div>
        <div className="blog-post">
          <img src="https://source.unsplash.com/400x400/?fashion" alt="Fashion" />
          <h3>Post Title</h3>
          <p>Post excerpt</p>
        </div>
      </div>
    </div>
  )
}
export default Blog
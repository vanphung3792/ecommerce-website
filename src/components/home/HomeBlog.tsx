import Button from "../Button"

const HomeBlog = () => {

    const blogPost = `
        flex
        flex-col
        items-start
        justify-center
        gap-2
        w-[30%]
        p-4
    `
  return (
    <div
        className="
            flex
            flex-col
            items-center
            justify-center
            gap-8
            mt-32
        "
    >
      <div
        className="
            flex
            flex-row
            justify-between
            items-center
            w-full
            px-[12.5%]
        "
      >
        <h2>Blog</h2>
        <button className="text-accent">See all</button>
      </div>
      <div
        className="
            flex
            flex-wrap
            justify-center
            items-center
            gap-8
            mt-4
            w-[80%]
        "
      >
        <div className={blogPost}>
          <img src="https://source.unsplash.com/400x250/?nature" alt="Nature" />
          <p className="text-sm text-gray-500 italic mt-2">09 September, 2024</p>
          <h4>Post Title</h4>
          <p className="text-sm text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur labore dignissimos doloribus </p>
          <Button label="Read More" onClick={() => {}} secondary />
        </div>
        <div className={blogPost}>
          <img src="https://source.unsplash.com/400x250/?nature" alt="Nature" />
          <p className="text-sm text-gray-500 italic mt-2">09 September, 2024</p>
          <h4>Post Title</h4>
          <p className="text-sm text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur labore dignissimos doloribus </p>
          <Button label="Read More" onClick={() => {}} secondary />
        </div>
        <div className={blogPost}>
          <img src="https://source.unsplash.com/400x250/?nature" alt="Nature" />
          <p className="text-sm text-gray-500 italic mt-2">09 September, 2024</p>
          <h4>Post Title</h4>
          <p className="text-sm text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur labore dignissimos doloribus </p>
          <Button label="Read More" onClick={() => {}} secondary />
        </div>
      </div>
    </div>
  )
}
export default HomeBlog
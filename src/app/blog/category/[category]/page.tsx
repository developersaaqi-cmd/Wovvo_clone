'use client'

import React from 'react'
import blogCategoryList from 'src/data/blogCategoryList'
import blogMostPopularGuides from 'src/data/blogMostPopularGuides'
import { useRouter } from 'next/navigation'
import blogData from 'src/data/blogData'

type PageProps = {
  params: { category: string }
}

const page = ({ params }: PageProps) => {
  const router = useRouter()
  const categorySlug = decodeURIComponent(params.category).replace(/_/g, ' ')
  const filteredBlogs = blogData.filter(
    (blog) => blog.category.toLowerCase() == categorySlug.toLowerCase()
  )

  const handleCategoryClick = (category: string) => {
    router.push(`/blog/category/${category}`)
  }

  const handleBlogClick = (id: number, title: string) => {
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
    router.push(`/blog/${id}_${slug}`)
  }

  if (!filteredBlogs || filteredBlogs.length === 0)
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[6rem] flex">
        <div className="text-6xl w-full py-[60px] px-[40px]">
          Category not found!
        </div>
      </div>
    )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[6rem] flex blog-wrapper">
      <div className="bg-[#FAFAFA] w-[390px] py-[60px] px-[25px] blog-sidebar">
        <h2 className="text-l font-bold bg-gradient-to-r from-[#EE2720] to-[#F98C0D] bg-clip-text text-transparent pb-[5px]">
          Choose your topic
        </h2>
        <ul className="blog-topic-list">
          {blogCategoryList.map((category, index) => {
            const categoryName = category.name
            const categorySlugFormatted = encodeURIComponent(categoryName.toLowerCase().replace(/ /g, '_'))

            const isActive = categorySlugFormatted === params.category

            return (
              <li
                key={'blogCategoryList' + index}
                onClick={() => handleCategoryClick(categorySlugFormatted)}
                className={isActive ? 'active' : ''}
              >
                {categoryName}
              </li>
            )
          })}
        </ul>
        <h3 className="text-l font-bold bg-gradient-to-r from-[#EE2720] to-[#F98C0D] bg-clip-text text-transparent pt-[30px] border-b-[1px] border-y-[#d9d9d9] pb-[10px]">
          The Most Popular Guides
        </h3>
        <ul className="blog-cat-list">
          {blogMostPopularGuides.map((blog, index) => {
            return (
              <li
                key={'blogMostPopularGuides' + '' + index}
                onClick={() => handleBlogClick(blog.id, blog.name)}
              >
                {blog.name}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="w-full py-[60px] px-[25px] blog-main-body">
        <h1 className="text-[50px] font-bold p-0 m-0 leading-none">
          Our Guides
        </h1>
        <p className="text-[18px] text-[#4B5563] leading-[32px] pt-3">
          Our guides offer step-by-step tips to help you start, grow, and
          succeed as a UGC creator. From building your portfolio to landing paid
          brand deals, we’ve got you covered.
        </p>
        <div className="main-category-thumbnail grid grid-cols-3 gap-4">
          {filteredBlogs.map((blog_data, index) => {
            return (
              <div
                key={'filteredBlog-' + index}
                className="blog-box"
                onClick={() =>
                  handleBlogClick(blog_data.id, blog_data.title)
                }
              >
                <img
                  src={`/blog/${blog_data.image}`}
                  className="w-full"
                  alt=""
                />
                <h6>{blog_data.category}</h6>
                <h2>
                  {blog_data.title.length > 55
                    ? blog_data.title.slice(0, 60) + '...'
                    : blog_data.title}
                </h2>
                <p>
                  {blog_data.caption.length > 70
                    ? blog_data.caption.slice(0, 70) + '...'
                    : blog_data.caption}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default page
import type { InferGetStaticPropsType } from 'next'
import { GetStaticPaths, GetStaticPropsContext } from 'next/types'
import { Article, BlogPostImage } from '@components/Article'
import type { Post } from '../index'

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </Article>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: Post[] = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() }
  }))

  console.log('빌드 패스!', paths)

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context

  const emmptyPost = {
    title: 'Post not found',
    body: '',
    id: 0,
    userId: 0
  }

  if (!params?.id) {
    return {
      props: {
        post: emmptyPost
      }
    }
  }

  const post: Post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then((res) => res.json())

  return {
    props: {
      post
    }
  }
}

import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { GetStaticPaths, GetStaticPropsContext } from 'next/types'
import { Article, BlogPostImage } from '@components/Article'
import type { Post } from '../index'

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, body } = post

  return (
    <Article>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <h1>{title}</h1>
      <p>{body}</p>
    </Article>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: Post[] = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() }
  }))

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

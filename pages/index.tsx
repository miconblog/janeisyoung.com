import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import styled from '@emotion/styled'
import Link from 'next/link'

const Container = styled.div`
  padding: 0 2rem;
`
const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const BlogTitle = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`

const List = styled.ul`
  list-style: square;
`

const ListItem = styled.li`
  padding: 10px;
  text-transform: capitalize;
  margin: 40px 0;
  cursor: pointer;
  color: #252525;
  &:hover {
    background: #f0f0f0;
  }
`

const PostTitle = styled.h2`
  margin: 0;
  font-size: 24px;
`

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <Head>
        <title>Jane is young</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Main>
        <BlogTitle>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </BlogTitle>
        <Link href="/about">
          <a>About this blog</a>
        </Link>

        <List>
          {posts.map((post) => (
            <Link key={post.id} href="/posts/[id]" as={`/posts/${post.id}`}>
              <ListItem>
                <PostTitle>{post.title}</PostTitle>
              </ListItem>
            </Link>
          ))}
        </List>
      </Main>
    </Container>
  )
}

export default Home

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}
export const getStaticProps = async () => {
  const posts: Post[] = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

  return {
    props: {
      posts
    }
  }
}

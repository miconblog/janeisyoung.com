import { useRouter } from 'next/router'
import { NextPage } from 'next/types'
import { Article } from '@components/Article'

const Post: NextPage = () => {
  const router = useRouter()
  const { title } = router.query

  return (
    <Article>
      <h1>Post title: {title}</h1>
      <p>Lorem ipsum</p>
    </Article>
  )
}

export default Post

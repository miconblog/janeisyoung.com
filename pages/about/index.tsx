import { NextPage } from 'next/types'
import { Article } from '@components/Article'

const About: NextPage = () => {
  return (
    <Article>
      <h1>About this blog</h1>
      <p>This is the best blog ever</p>
    </Article>
  )
}

export default About

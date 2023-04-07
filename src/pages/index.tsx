import React, { useMemo } from 'react'
import Head from 'next/head'

import HomeContent from 'contents/Home'
import { getAllPosts, IPost } from './api/posts'

interface Props {
  posts: IPost[]
}

const Home: React.FC<Props> = ({ posts }) => {
  const sortedPosts = useMemo(() => {
    return posts.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      }
      if (a.date > b.date) {
        return -1
      }
      return 0
    })
  }, [posts])

  return (
    <>
      <Head>
        <title>Cry of the Roses - Atelier of Poems</title>
        <meta property="og:title" content="Cry of the Roses - Atelier of Poems" />
        <meta name="description" content="The page was born with the aim of becoming an online atelier and keeping my poems so that other people can see and maybe feel a little of what I was feeling when I wrote." />
        <meta property="og:description" content="The page was born with the aim of becoming an online atelier and keeping my poems so that other people can see and maybe feel a little of what I was feeling when I wrote." />
      </Head>
      <HomeContent posts={sortedPosts} />
    </>
  )
}

export async function getStaticProps () {
  const posts = await getAllPosts()
  return {
    props: { posts }
  }
}

export default Home

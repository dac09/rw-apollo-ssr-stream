import { setVerbosity } from 'ts-invariant'

import BlogPostsCell from 'src/components/BlogPostsCell'
import DelayedStuff from 'src/components/DelayedComponent'

// const doSomething = () => {
//   console.log(PrismaClient)
// }
setVerbosity('debug')

const HomePage = () => {
  // useServerInsertedHTML(() => {
  //   console.log('XXXX ServerInsertedHTML')
  //   console.log('Running function injected from HomePage')
  //   return (
  //     <script
  //       dangerouslySetInnerHTML={{
  //         __html: `alert('bazinga this was set by useServerInsertHtml');`,
  //       }}
  //     />
  //   )
  // })
  // doSomething()

  return (
    <>
      <DelayedStuff />
      <BlogPostsCell />
    </>
  )
}

export default HomePage

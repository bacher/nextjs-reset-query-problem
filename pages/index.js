import Link from 'next/link'
import {useRouter} from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
      <Link href={{query: {hello: 'world'}}}><a>Home with param</a></Link>
      <Link href={{query: {hello: ''}}}><a>Home with empty param</a></Link>
      <Link href={{query: {hello: undefined}}}><a>Home without param</a></Link>

      <button type="button" onClick={e => {
        e.preventDefault();

        router.push({
          query: {
            hello: undefined
          }
        })
      }}>Same problem with router.push(...)
      </button>
    </div>
  )
}

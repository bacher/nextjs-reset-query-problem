import Link from 'next/link'

export default function Home() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <Link href={{query: {hello: 'world'}}}><a>Home with param</a></Link>
      <Link href={{query: {hello: ''}}}><a>Home with empty param</a></Link>
      <Link href={{query: {hello: undefined}}}><a>Home without param</a></Link>
    </div>
  )
}

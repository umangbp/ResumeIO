import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <TitleComponent></TitleComponent>
  )
}


const TitleComponent = () => {
  return (
    <h1>Component 1</h1>
  )
}

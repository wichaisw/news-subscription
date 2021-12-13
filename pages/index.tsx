import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainFeed from './feeds/main'
import { INewsContent } from '../interfaces/newsContent'

const Home: NextPage = () => {
  return (
    <div>index</div>
  )
}


export default Home

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout';
import Landing from '../components/Landing';

const Home = () => {
  return (
    <Layout>
      <Landing />
    </Layout>
  )
}

export default Home
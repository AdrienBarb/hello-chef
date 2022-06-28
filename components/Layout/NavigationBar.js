import React from 'react'
import styles from '../../styles/Layout/NavigationBar.module.scss'


const NavigationBar = () => {
  return (
    <div className={styles.container}>
      <div>HELLO CHEF</div>
      <div className={styles.navigationLinksWrapper}>
        <a>Home</a>
        <a>About</a>
        <a>Roadmap</a>
        <a>Tokenomics</a>
        <a>Team</a>
        <a>Early access</a>
        <a>FAQ</a>
      </div>
      <div className={styles.socialMediaLinksWrapper}>
        <a>Discord</a>
        <a>Twitter</a>
      </div>
    </div>
  )
}

export default NavigationBar
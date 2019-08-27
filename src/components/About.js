import React from 'react'

import Container from './Container'
import Link from './Link'
import me from '../images/me.jpg'
import styles from './About.css'

const About = () => (
  <Container>
    <div className={styles.about}>
      <div className={styles.avatar}>
        <img className={styles.img} src={me} alt="self portrait" />
      </div>
      <div className={styles.info}>
        <p>
          <span className={styles.item}>UI Developer</span>-
          <span className={styles.item}>Mentor</span>-
          <span className={styles.item}>Guild Admin</span>
        </p>
        <p>
          <span className={styles.item}>React</span>-
          <span className={styles.item}>Redux</span>-
          <span className={styles.item}>ES6</span>
        </p>
        <p>
          <span className={styles.item}>CSS Modules</span>-
          <span className={styles.item}>Isomorphic</span>-
          <span className={styles.item}>Canvas</span>
        </p>
        <p />
        <p>
          <Link className={styles.item} to="https://www.youtube.com/channel/UChUKUZTIK8eFDHSuX_5EBrA">YouTube</Link>-
          <Link className={styles.item} to="https://codepen.io/jamesformica/">CodePen</Link>
        </p>

        <p>
          <Link className={styles.item} to="https://github.com/jamesformica/">GitHub</Link>-
          <Link className={styles.item} to="https://linkedin.com/in/james-formica">linkedIn</Link>-
          <Link className={styles.item} to="mailto:james.formica@gmail.com">email</Link>
        </p>
      </div>
    </div>
  </Container>
)

export default About

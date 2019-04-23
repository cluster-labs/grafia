import React from 'react'
import { Button } from 'antd'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss'
import RegisterForm from './RegisterForm'

class Register extends React.Component {
  state = {
    fullScreen: true,
    backgroundNumber: 4,
  }

  setFullscreen = () => {
    const { fullScreen } = this.state

    this.setState({
      fullScreen: !fullScreen,
    })
  }

  changeBackground = () => {
    let { backgroundNumber } = this.state
    if (backgroundNumber === 5) {
      backgroundNumber = 1
    } else {
      backgroundNumber += 1
    }
    this.setState({
      backgroundNumber,
    })
  }

  render() {
    const { fullScreen, backgroundNumber } = this.state

    return (
      <div>
        <Helmet title="Register" />
        <section
          className={`${styles.login} ${fullScreen ? styles.fullscreen : styles.windowed}`}
          style={{ backgroundImage: `url('resources/images/photos/${backgroundNumber}.jpeg')` }}
        >
          <header className={styles.header}>
            <NavLink to="/" className={styles.logo} href="javascript: void(0);">
              <img src="resources/images/logo-inverse.png" alt="Clean UI Admin Template" />
            </NavLink>
            <nav className={styles.loginNav}>
              <ul className={styles.navItems}>
                <li>
                  <NavLink to="/login" className={styles.active} href="javascript: void(0);">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" href="javascript: void(0);">About</NavLink>
                </li>
                <li>
                  <NavLink to="/support" href="javascript: void(0);">Support</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <div className={styles.content}>
            <div className={styles.promo}>
              <h1 className="mb-3">Welcome to Clean UI admin template</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquid at autem
                commodi corporis, distinctio dolore eveniet explicabo facere iste laborum nobis
                officiis, placeat praesentium quia, sit soluta vel!
              </p>
            </div>
            <div className={styles.form}>
              <p className={styles.formTitle}>Signup</p>
              <RegisterForm />
            </div>
          </div>
          <footer className={styles.footer}>
            <ul className={styles.footerNav}>
              <li>
                <NavLink to="/tou" href="javascript: void(0);">Terms of Use</NavLink>
              </li>
              <li>
                <NavLink to="/compliance" href="javascript: void(0);">Compliance</NavLink>
              </li>
              <li>
                <NavLink to="/faq" href="javascript: void(0);">FAQs</NavLink>
              </li>
            </ul>
          </footer>
        </section>
      </div>
    )
  }
}

export default Register

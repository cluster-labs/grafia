import React from 'react'
import { Button } from 'antd'
import styles from './style.module.scss'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.bottom}>
        <div className="row">
          <div className="col-sm-6">
            FAQs
          </div>
          <div className="col-sm-6">
            <div className={styles.copyright}>
              <img
                src="resources/images/mediatec.png"
                rel="noopener noreferrer"
                alt="Mediatec Software"
              />
              <span>
                © {`${Date().split(' ')[3]} `}
                <a href="http://mediatec.org/" target="_blank" rel="noopener noreferrer">
                  Cluster Labs
                </a>
                <br />
                All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer

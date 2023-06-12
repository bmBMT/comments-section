import React from 'react'
import styles from './Col.module.css'

const Col = ({ children, classes = '', ...props }) => {
  return (
    <div style={{...props}} className={`${styles.col} ${classes}`}>
      {children}
    </div>
  )
}

export default Col

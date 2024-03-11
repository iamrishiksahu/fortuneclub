import React from 'react'

const AppLogo = ({width}) => {
    const w = width || '124px'
  return (
    <img src="/assets/common/app_logo.png" width={w} />
  )
}

export default AppLogo
import React from 'react'
import TopBanner from './TopBanner'
import AboutUs from './AboutUs'
import FoodMenu from './FoodMenu'
import LetsTalk from './LetsTalk'
import OverServices from './OverServices.'

const MainBody = () => {
  return (
    <>
    <main>
        <TopBanner />
        <AboutUs />
        <FoodMenu />
        <OverServices />
        <LetsTalk />
    </main>
    </>
  )
}

export default MainBody
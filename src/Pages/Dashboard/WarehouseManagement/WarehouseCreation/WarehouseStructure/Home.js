import React from 'react'
import SideOptions from './SideOptions'
import OuterStructure from './OuterStructure'

const Home = () => {
  return (
        <div className="col-md-12 d-flex p-4 warehouse-structure-view">
        <div className="col-md-1 warehouse-structure-options">
          <SideOptions/>
        </div>
        <div className="col-md-11 warehouse-structure-bg">
          <OuterStructure/>
          </div>
        </div>
  )
}

export default Home
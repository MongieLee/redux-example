import React from 'react'
import { connect } from 'react-redux'

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <div style={{ border: `1px solid red` }}>
        <p>{JSON.stringify(props)}</p>
      </div>
    </div>
  )
}


const mapStateToProps = ({ fuck }) => ({ fuck })

export default connect(mapStateToProps)(Home)
import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

const Home = (props) => {
  return (
    <div>
      <Button type='primary' danger>测试按需加载</Button>
      <button onClick={() => {
        props.change()
      }}>点我dispatch</button>
      <p>{JSON.stringify(props)}</p>
      <button onClick={() => { props.nomarl() }}>点我操蛋</button>
    </div>
  )
}


Home.defaultProps = {
  test: 'test'
}
const mapStateToProps = ({ fuck }) => ({ fuck })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     change() { dispatch({ type: 'change' }) },
//     nomarl() { dispatch({ type: 'reset' }) }
//   }
// }

const mapDispatchToProps2 = {
  change() { return { type: 'change' } },
  nomarl() { return { type: 'reset' } },
}

export default connect(mapStateToProps, mapDispatchToProps2)(Home)
import App from "../components/app"
import {connect} from "react-redux"
import {compose, lifecycle} from "recompose"
import {getHand} from "../selectors"
import {startGame} from "../actions"

function mapStateToProps(state) {
  return {
    cards: getHand(state, "south"),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    startGame() {
      dispatch(startGame())
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.startGame()
    }
  })
)(App)
import React, {
   Component
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment, decrement } from '../actions/action-creators';

import style from './App.scss';
import classNames from 'classNames/bind';

const css = classNames.bind(style);

class App extends Component {
  constructor (props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.stopDecrement = this.stopDecrement.bind(this);
  }

  onClick (e) {
    this.props.increment();
  }

  stopDecrement (e) {
    if(this.props.count <= 0 ) return;
    this.props.decrement();
  }

  render () {
    const { saludo, toDos, children, count, increment, decrement } = this.props;

    return (
      <div>
        <p className={ css('app', 'app-coso') } onClick={ this.onClick } >Hola Mundo {count}</p>
        <button onClick={ this.stopDecrement }> {count} </button>
        <ul>
          {
            toDos.map((todo, i) => {
              return <li key={i}>{todo}</li>
            })
          }
        </ul>
        { children }
      </div>
    );
  }
}

function mapStateToProps(state, ownState) {
  return Object.assign({}, state);
}

function mapDispatchToProps(dispatch, ownState) {
  return bindActionCreators({
    increment,
    decrement
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

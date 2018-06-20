import React from 'react';
import { createClassName } from '../../common/lib';
import './style.css';

class MenuItem extends React.PureComponent{
  render(){
    return (<div className={createClassName('menuItem', (this.props.selected ? 'selected' : undefined))} onClick={this.props.onClick}>
      <span className={'menuItem-title'}>{this.props.title}</span>
    </div>);
  }
}

export default MenuItem;
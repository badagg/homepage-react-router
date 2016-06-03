import React from 'react';
import { Link } from 'react-router';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='index'>
      	<Link to='/about'>关于我</Link>
      	<Link to='/album'>相册</Link>
      </div>
    );
  }
}

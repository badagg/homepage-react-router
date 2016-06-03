import React from 'react';

export default class PictureShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='pic-box'>
      	<div className='box' style={{
      		transform:'translate3d('+(this.props.id * -600)+'px,0,0)'
      	}}>
	      	{
	      		this.props.data.map(function(elem, index) {
	      			return <img key={index} src={elem.image}/>;
	      		})
	      	}
      	</div>
      </div>
    );
  }
}

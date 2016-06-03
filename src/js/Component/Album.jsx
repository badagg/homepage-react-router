import React from 'react';
import $ from 'jquery';
import PictureShow from './PictureShow.jsx';
import { Link } from 'react-router';

export default class Album extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
		id:0,
		list:[],
		src:''
    };

    this.ajax();
  }

  ajax(){
  	var the = this;
  	$.ajax({
  		url: './src/js/data.json',
  		type: 'GET',
  		dataType: 'json'
  	})
  	.done(function(data) {
  		the.setState({
  			list:data.album
  		})
  		the.viewCurrentMode();
  	})
  }

  componentWillReceiveProps() {
  	this.viewCurrentMode();
  }

  viewCurrentMode(){
  	let arr = String(window.location.hash).split('/');
	let id = Number.parseInt(arr[arr.length-1]);
	let c = Number.isNaN(id) ? 0 : id;
	this.setState({
		id:c,
  		src:this.state.list[c].image
  	})
  }

  render() {
  	var the = this;
    return (
      <div className='album-box'>
      	<div className='thumb'>
      		<ul>
      			{
      				this.state.list.map(function(elem, index) {
	      				var url = '/album/'+index;
	      				var cla = index === the.state.id ? 'on' : '';
	      				return <Link className={cla} key={index} to={url}><img src={elem.image} /></Link>;
	      			})
      			}
      		</ul>
      	</div>
      	<PictureShow data={this.state.list} id={this.state.id} />
      </div>
    );
  }
}











/**
 * @introduction  Entry
 * @authors       Null (email:Null@yhd.cn)
 * @date          Null
 * @update        Null
 */

import '../css/app.scss';

// import react
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory,useRouterHistory,browserHistory} from 'react-router';
import { createHashHistory } from 'history'

// import component
import Index from './Component/Index.jsx';
import Album from './Component/Album.jsx';
import PictureShow from './Component/PictureShow.jsx'
import About from './Component/About.jsx';

// queryKey 去掉路由后随机 _k 参数
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

// router
var MyRouter = (
	<Router history={appHistory}>
		<Route path="/" component={Index} />
		<Route path="/album" component={Album}>
			<Route path="/album/:id" component={PictureShow} />
		</Route>
		<Route path="/about" component={About} />
	</Router>
)

// Render
render( MyRouter, document.getElementById('app'));
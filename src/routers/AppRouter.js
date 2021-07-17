import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from '../components/Home';
import About from '../components/About';
import Favourites from '../components/Favourites';
import FetchSingleMovie from '../components/FetchSingleMovie';
import Search from '../components/Search';

import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRouter = () => (
	<Router basename={'/movie-app'}>
		<div className="wrapper">
			<Header />
			<Switch>
				<Route path={'/'} exact><Home /></Route>
				<Route path={'/about'}><About /></Route>
				<Route path={'/favourites'}><Favourites /></Route>
				<Route path={'/movie_:movieId'} exact component={FetchSingleMovie} />
				<Route path={'/search/:query'} component={Search} />
			</Switch>
			<Footer />
		</div>
	</Router>
);

export default AppRouter;

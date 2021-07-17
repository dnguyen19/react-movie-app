import React from 'react';
import NavBar from './NavBar';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
          showNavBar: false,
          matches: window.matchMedia("(min-width: 650px)").matches
        };
      }

    componentDidMount() {
      const handler = e => this.setState({matches: e.matches});
      window.matchMedia("(min-width: 650px)").addListener(handler);
    }

    handleNavBar = () => {
      this.setState({ 
        showNavBar: !this.state.showNavBar 
      });
    }

    render() {

        return (
            <header>
              <div className="header-items">
                <NavLink to="/" exact><h1>SHOWTIME</h1></NavLink>
                {!this.state.matches && <button onClick={this.handleNavBar}><p>&#9776;</p></button>}
              </div> 
              {this.state.matches && <NavBar />}
              {this.state.showNavBar && <NavBar/>}
            </header>
        );
    }
}

export default Header;



import React, { Component } from 'react';

class SelectSortBy extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentSort: this.props.sortby,
          matches: window.matchMedia("(min-width: 650px)").matches,
        };
      }
      

    componentDidMount() {
      const handler = e => this.setState({matches: e.matches});
      window.matchMedia("(min-width: 650px)").addListener(handler);
    }

    setCurrentSort = (e,value) => {
        e.preventDefault();
        this.setState({ 
            currentSort: value,
          });
    }

    render() {
        this.props.handleSortChange(this.state.currentSort);
        return (
            <div>
                {!this.state.matches &&
                <div className="dropdown">
                    <label>Sort by:</label>
                    <select id="select-sort-by" value={this.state.currentSort} onChange={(e) => this.setCurrentSort(e, e.target.value)}>
                        <option value="popular">Popular</option>
                        <option value="top_rated">Top Rated</option>
                        <option value="now_playing">Now Playing</option>
                        <option value="upcoming">Upcoming</option>
                    </select>
                </div> }

                {this.state.matches && 
                <div className="menu-sortby">
                    <a style={{'fontWeight': this.state.currentSort === 'popular' ? 'bold' : 'lighter'}} onClick={e => this.setCurrentSort(e,'popular')}>Popular</a>
                    <a style={{'fontWeight': this.state.currentSort === 'top_rated' ? 'bold' : 'lighter'}} onClick={e => this.setCurrentSort(e,'top_rated')}>Top Rated</a>
                    <a style={{'fontWeight': this.state.currentSort === 'now_playing' ? 'bold' : 'lighter'}} onClick={e => this.setCurrentSort(e,'now_playing')}>Now Playing</a>
                    <a style={{'fontWeight': this.state.currentSort === 'upcoming' ? 'bold' : 'lighter'}} onClick={e => this.setCurrentSort(e,'upcoming')}>Upcoming</a>
                </div>
                }
            </div>
        );
    }
}

export default SelectSortBy;

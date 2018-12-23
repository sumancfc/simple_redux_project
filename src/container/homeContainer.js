import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allArtistsList, artistList } from '../actions';

import Search from '../components/search';
import Artistlist from '../components/artistlist';


class HomeContainer extends Component { 

    componentWillMount() {
        this.props.allArtistsList();
    }


    getKeywords = (event) => {
        let key = event.target.value;

        this.props.artistList(key)
    }

    render(){
       console.log(this.props)
        return (
            <div>
                <Search keywords={this.getKeywords}/>
                <Artistlist artists={this.props.artists.artistList} />
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    
    return {
        artists: state.artists
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        allArtistsList,
        artistList
    },dispatch)
    }

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';

class App extends Component {
    constructor(props) {
        super();

        this.state = {
            query: '',
            artist: null,
        }
    }

    handleSearch() {
        const BASE_URL = 'https://api.spotify.com/v1/search';
        const FETCH_URL =  `${BASE_URL}?q=${encodeURI(this.state.query)}&type=artist&limit=1`;
        fetch(FETCH_URL, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            const artist = json.artists.items[0];
            
            this.setState({
                artist
            })
        });
    }

    render() {
        return (
            <div className='app'>
                <div className="app-title">Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type='text' placeholder='search for an artist...'
                            value={ this.state.query }
                            onChange={ event => { this.setState({ query: event.target.value }) } }
                            onKeyPress={ event => { if (event.key === 'Enter') this.handleSearch() } }
                        />
                        <InputGroup.Addon onClick={ () => this.handleSearch() }>
                            <Glyphicon glyph='search' />
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <div className='profile'>
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>

                <Profile artist={ this.state.artist } />

                <div className="gallery">
                    Gallery
                </div>
            </div>
        );
    }
}

export default App;
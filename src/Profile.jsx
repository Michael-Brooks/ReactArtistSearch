import React, { Component } from 'react';

class Profile extends Component {
    render() {
        let artist = {name: '', followers: { total: '' }, images: [{ url: ''} ], genres: []};

        
        artist = this.props.artist !== null ? this.props.artist : artist;

        return (
            <div>
                <img src={ artist.images[0].url } className='profile-img' alt='Profile'/>
                <div>{ artist.name }</div>
                <div>{ artist.followers.total }</div>
                <div>
                    {
                        artist.genres.map((genre, index) => {
                            return <span key={index}>{ genre }</span>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Profile;
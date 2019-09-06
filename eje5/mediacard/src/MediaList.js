import React from 'react';
import MediaCard from './MediaCard';
const userName = "Alejandro Guerra";
const date = "Sábado 7 de Junio de 1988";
const userPicture = "data:image/jpeg;base64,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";
const description = "Bello ser del bien";
const numberOfLikes = "1k";

class MediaList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ul>
                <li><MediaCard userName={userName} date={date} userPicture={userPicture} description={description} numberOfLikes={numberOfLikes} /></li>
                <li><MediaCard userName={userName} date={date} userPicture={userPicture} description={description} numberOfLikes={numberOfLikes} /></li>
                <li><MediaCard userName={userName} date={date} userPicture={userPicture} description={description} numberOfLikes={numberOfLikes} /></li>
                </ul>
                
            </React.Fragment>

        )
    }
}
export default MediaList;
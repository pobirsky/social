import * as React from 'react';
import FriendsContainer from "./FriendsContainer";
import FriendsOnlineContainer from "./FriendsOnlineContainer";

let styles = {
    marginTop: '25px',
};

function Friends() {
    return (
        <div style={styles}>
            <div style={{display: 'flex'}}>
                <FriendsContainer/>
                {/*<FriendsOnlineContainer/>*/}
            </div>
        </div>
    );
}

export default Friends;
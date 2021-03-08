import React, { useState } from "react";
import SongInfo from './SongInfo.js';
import Performance from './Performance.js';

import "./Layout.css";

function Layout() {

    const [songDataState, setSongDataState] = useState({
        songName : "Lorem Ipsum x",
        artistName: "Eisusmod Tempor X",
        score: "100000000",
        multiplier: 8,
        combo: 149,
    });

    const onSongDataChange = ({changedValues}) => {
        setSongDataState({
            ...songDataState,
            score: changedValues.score,
        });
    }

    return (
        <div className="layout">
            <div className="spacer" />
            <div className="info-line">
                <div className="song-info">
                    <SongInfo
                        songDataState={songDataState}
                        onSongDataChange={onSongDataChange}
                />
                </div>
                <div className="performance">
                    <Performance
                        songDataState={songDataState}
                    />
                </div>
            </div>
        </div>
    );
}


export default Layout;
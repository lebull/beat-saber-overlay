import React from "react";
import "./SongInfo.css";

const SongInfo = ({songDataState}) => {    

    return <div>
        <h2>{songDataState.songName}</h2>
        <h3>{songDataState.artistName}</h3>
    </div>
}

export default SongInfo;
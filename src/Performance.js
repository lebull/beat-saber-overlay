import React from "react";

const Performance = ({songDataState}) => {
    return <div>
        <h2>{songDataState.score}</h2>
        <div>
            <h4>{songDataState.multiplier}</h4>
            <h4>{songDataState.combo}</h4>
        </div>
    </div>;
}

export default Performance;
import React from 'react'
import Spline from '@splinetool/react-spline';
import splinedata from './avatar.spline';

function Avatar() {
    return (
        <div>
            <Spline scene={splinedata} />
        </div>
    )
}

export default Avatar

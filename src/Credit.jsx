import React from 'react';

export default function Credit (props) {
    console.log(props)

    return (
        <p><b>Image Credit and Copyright: {props.credit}</b>    </p>
    )
}
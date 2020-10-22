import React from 'react';

export default function Credit (props) {
    console.log(props)

    return (
        <p><b><i>Image Credit and Copyright: {props.credit}</i></b></p>
    )
}
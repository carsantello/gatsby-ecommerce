import React, { Fragment } from 'react';
import Nav from './Nav';
import SEO from './SEO';

export default (props) => {
    return (
//what is about to :<Nav /> is to avoid writting all the parenthood/childhood related
        <Fragment>
            < SEO />
                <Nav />   
                    <main> 
                        { props.children } 
                    </main> 
        </Fragment>
    )
}
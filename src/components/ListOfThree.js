import React from 'react';
import './ListOfThree.css';

function ListOfThree() {
    return (
        <div className="ListOfThree">
            <header className="ListOfThree-header">
                <p>Costco Shopping List</p>
                <ul>
                    <li>Coconut Water</li>
                    <li>Tasty Bite Lentils</li>
                    <li>Kirkland Tequila</li>
                </ul>
            </header>
        </div>
    );
}
// Woo-hoo! This code works as-is. I had to replace <App /> with <ListOfThree /> and add the import statement
// to get my new component. But that's it. I didn't need to do any setup.
// NOTE that a component may only return ONE single-level element. You can't return sibling elements; if you need 
// to return multiple divs, then wrap those in another div, or some other parent element.
export default ListOfThree
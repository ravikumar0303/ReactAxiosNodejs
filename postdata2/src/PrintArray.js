import React from 'react';

function PrintArray(){
    const names=["ravi", "Shamim", "Jeremy","Deepak","Ashish"];
    const listItem=names.map((name) =><li>{name}</li>)
    return <ul>{listItem}</ul>
}
export default PrintArray;


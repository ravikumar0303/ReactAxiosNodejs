import React, { useState } from  "react";

function CounterIncr(){
    const [count, setCount] = useState(0)

    const Increment =() =>{
        setCount(count +1)
    }
    return(
        <div>
            <button onClick={Increment}>Increment</button>
            <p>Count:{count}</p>
        </div>
    );
}

export default CounterIncr;
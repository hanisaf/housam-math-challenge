import { useState } from "react";
const a = Math.ceil(Math.random() * 10);
const b = Math.ceil(Math.random() * 10);
function MathChallenge() {

    const [value, setValue] = useState('0');
    const handleChange = (e) => {setValue(e.target.value); console.log(value);}
    return <>
        <h1>Math Challenge</h1>
        <p>{a} + {b} = ? </p>
        
        <input type="text" value={value} onChange={handleChange} />
        <button>check</button>
        <p>{Number(value) === (a + b) ? 
        <img height="100" src="https://previews.123rf.com/images/lenm/lenm1309/lenm130900009/22244820-illustration-of-happy-brain-mascot-sporting-ok-handsign.jpg"/> 
        : 
        <img height="150" src="https://thumbs.dreamstime.com/b/confused-brain-unraveling-problem-isolated-white-puzzled-brain-unravel-problem-isolated-white-background-200351222.jpg" />}</p>


        </>
}

export default MathChallenge;
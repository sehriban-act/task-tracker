import {useState} from "react";

import ControlledInputs from "../AddTask/Form";

import  "./Button.module.scss"; 
// class Button extends Component {
//   render() {
//     // reference as a js object
//     return <button className={styles.error}>Error Button</button>;
//   }
// }

// export default Button;
function MyHeader  (){

  const [show, toggleShow] = useState(true);
  
  return (
    <div>
      <button onClick={() => toggleShow(!show)}>
        {" "}
        {show ? "Hide ADD Task Bar" : "Show ADD Task Bar"}
      </button>
      {show && (
        <div>
          <ControlledInputs />
        </div>
      )}
    </div>
  );
}

export default MyHeader;
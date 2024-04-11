import { useState } from "react";
import { Transition } from "react-transition-group";

const TransExample = () => {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }

  return (
    <>
      <p> TransExample</p>
      <div>
        <button onClick={handleClick}>{show ? "Hide" : "Show"}</button>
        <Transition in={show} timeout={500}>
          {(state) => (
            <div
              style={{
                transition: "opacity 300ms ease-out",
                opacity: state === "entered" ? 1 : 0,
              }}
            >
              {show && <p>Hello, world!</p>}
            </div>
          )}
        </Transition>
      </div>
    </>
  );
};

export default TransExample;

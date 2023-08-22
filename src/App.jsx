import React, {useLayoutEffect} from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Panel from "./components/Panel/Panel";
import useStoreContext from "./hook/useStoreContext";

const App = () => {
  const { dispatch } = useStoreContext();

  const updateStep = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1440) {
      dispatch({ type: 'SET_STEP', payload: 5 });
    } else if (screenWidth >= 1100) {
      dispatch({ type: 'SET_STEP', payload: 4 });
    } else if (screenWidth >= 981) {
      dispatch({ type: 'SET_STEP', payload: 3 });
    } else if (screenWidth >= 834) {
      dispatch({ type: 'SET_STEP', payload: 2 });
    } else {
      dispatch({ type: 'SET_STEP', payload: 0 });
    }
  };

  useLayoutEffect(() => {
    updateStep();
    window.addEventListener('resize', updateStep);

    return () => {
      window.removeEventListener('resize', updateStep);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <Sidebar />
      <Panel />
    </>
  );
}

export default App;

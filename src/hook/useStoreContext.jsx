import { useContext } from "react";

import { StoreContext } from "../context/StoreProvider";

const useStoreContext = () => useContext(StoreContext);

export default useStoreContext;

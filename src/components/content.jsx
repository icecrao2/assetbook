import { View_AccountBook, View_Cashbook } from './organization';

import {
  Routes,
  Route,
} from "react-router-dom";

const Content = () => {


  return (
    <Routes>
      <Route exact path="/" element={<View_AccountBook />} />
      <Route exact path="/cash" element={<View_Cashbook />} />
    </Routes>
  )

}

export default Content;
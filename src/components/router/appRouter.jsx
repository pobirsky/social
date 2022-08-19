import React from "react";
import { Route, Routes } from "react-router-dom";
import FormikLogin from "../LoginFormik";
import Main from "../centeer";
import { BlockPage } from "../pages/Blockpage";
import PostContainer from "../PostContainer";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<FormikLogin />} />
      <Route path="/main" element={<Main />} />
      <Route path="/news" element={<BlockPage />} />
      <Route path="/reduxToolkit" element={<PostContainer />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};

export default AppRouter;

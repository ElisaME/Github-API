import React from 'react'
import { Provider } from "react-redux";
import RepoForm from "./RepoForm"
import store from "../store/index";
import ReposList from './ReposList';
import Menu from './Navbar';

export default function ReposContainer() {
  return (
    <Provider store={store}>
      <Menu></Menu>
      <RepoForm/>
      <ReposList/>
    </Provider>
  )
}

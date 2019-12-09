import React from 'react'
import { Provider } from "react-redux";
import RepoForm from "./RepoForm"
import store from "../store/index";
import ReposList from './ReposList';

export default function ReposContainer() {
  return (
    <Provider store={store}>
      <RepoForm/>
      <ReposList/>
    </Provider>
  )
}

import React from 'react'
import UserForm from './UserForm'
import List from './List'
import { Provider } from "react-redux";
import store from "../store/index";

export default function UserContainer() {
  return (
    <div>
      <Provider store={store}>
        <UserForm/>
        <List/>
      </Provider>
    </div>
  )
}

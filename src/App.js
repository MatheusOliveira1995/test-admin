import * as React from "react"
import { Admin, Resource } from "react-admin"
import jsonServerProvider from "ra-data-json-server"
import { UserList } from "./components/Users"
import { PostList, PostCreate, PostEdit } from "./components/Posts"
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from "./pages/Dashboard"
import authProvider from "./authProvider"

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = () => (
    <Admin dataProvider = { dataProvider } dashboard={ Dashboard } authProvider={ authProvider }>
      <Resource name= "posts" list={ PostList } edit= { PostEdit } create= { PostCreate } icon= { PostIcon }></Resource>
      <Resource name="users" list={ UserList } icon= { UserIcon }></Resource>
    </Admin>
)

export default App
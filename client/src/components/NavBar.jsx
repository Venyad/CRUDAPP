import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom'
import styled from "styled-components";


const Header = styled(AppBar)`
    background: #111111
`;

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color: inherit;
    text-decoration: none;
`

const NavBar = () => {
    return (
        <Header position = "static">
            <AppBar>
                <Toolbar>
                    <Tabs to="/">Code for Interview</Tabs>
                    <Tabs to="/all" >All users</Tabs>
                    <Tabs to="/add">Add user</Tabs>

                </Toolbar>
            </AppBar>
        </Header>
    )
}

export default NavBar;
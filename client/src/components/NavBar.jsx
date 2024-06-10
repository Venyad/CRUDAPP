import { AppBar, styled } from '@mui/material'
import { Toolbar } from '@mui/material';

const Header = styled(AppBar)`
    background: #ffffff
`;

const Tabs = styled('p')`
    font-size: 20px;
    margin-right: 20px
`

const NavBar = () => {
    return (
        <Header position = "static">
            <AppBar>
                <Toolbar>
                    <Tabs>Code for Interview</Tabs>
                    <Tabs>All users</Tabs>
                    <Tabs>Add user</Tabs>

                </Toolbar>
            </AppBar>
        </Header>
    )
}

export default NavBar;
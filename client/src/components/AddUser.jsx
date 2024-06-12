import { FormControl } from "@mui/base";
import { FormGroup, InputLabel, Input, Typography, styled } from "@mui/material";

const Container = styled(FormGroup)`
width = 50%;
margin = 5% auto 0 auto;
`

const AddUser = () => {
    return(
        <Container>
            <Typography variant="h4">Add user</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>Phonenumber</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input/>
            </FormControl>
        </Container>
    )
}


export default AddUser;
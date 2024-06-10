import { FormControl } from "@mui/base";
import { FormGroup, InputLabel, Input, Typography } from "@mui/material";

const Container = styled(FormGroup)`
width = 50%;
`

const AddUser = () => {
    return(
        <FormGroup>
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
            

        </FormGroup>
    )
}


export default AddUser;
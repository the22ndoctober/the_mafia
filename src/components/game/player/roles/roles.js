import {React} from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import { setRole, selectRole} from '../../../../store/reducers/roles/roles'
import enums from '../../../../store/enums';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Roles({showRoles,id}){
    
    const role = useSelector(selectRole);
    const dispatch = useDispatch()
    

    const handleChange = (event)=>{
        dispatch(setRole([id, event.target.value]))
    }
    
     return(
        
        <div className="player__role" style={{display: showRoles? 'block' : 'none'}}>

            <FormControl sx={{ m: 1, minWidth: 120}} size="small" className='player__roleDropdown'>
                <Select
                className='player__roleOption'
                value={role[id]}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label'}}
                >
                    <MenuItem className='player__roleOption' value={enums.roles.none}>
                        {enums.roles.none}
                    </MenuItem>
                    <MenuItem className='player__roleOption' value={enums.roles.civil}>{enums.roles.civil}</MenuItem>
                    <MenuItem className='player__roleOption' value={enums.roles.mafia}>{enums.roles.mafia}</MenuItem>
                    <MenuItem className='player__roleOption' value={enums.roles.don}>{enums.roles.don}</MenuItem>
                    <MenuItem className='player__roleOption' value={enums.roles.sherif}>{enums.roles.sherif}</MenuItem>
                </Select>
            </FormControl>
        </div>
     )

    
     
   
}
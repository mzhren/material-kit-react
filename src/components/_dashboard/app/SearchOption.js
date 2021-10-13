import React from 'react'
import { Chip,Box } from '@material-ui/core';
import { Done } from '@material-ui/icons';


const SearchOption = ({searchItems,sId,changeSObj}) => {
    return (
        <Box className="search-option-container" display="flex" justifyContent="center">
            {
                searchItems.map((item,k)=>{
                    if(item.id === sId){
                        return (<Box mr={1}><Chip className="active" color="primary"
                        deleteIcon={<Done />} size="small" label={item.name} mr={1} variant="outlined" clickable onClick = {()=>changeSObj(item)} key={k} /></Box>)
                    }else{
                        return (<Box mr={1}><Chip size="small" label={item.name} key={k} mr={1} variant="outlined" clickable onClick = {()=>changeSObj(item)} /></Box>)
                    }
                })
            }
        </Box>
    )
}

export default SearchOption

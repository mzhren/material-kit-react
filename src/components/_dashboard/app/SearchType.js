import React from 'react'
import { Chip, Box } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';


const SearchType = ({ sType, searchOptions, changeSearchType }) => {
    return (
        <Box className="search-type-container" display="flex" justifyContent="center">
            {
                searchOptions.map((option, k) => {
                    if (option.type === sType) {
                        return (<Box mr={1} key={k}><Chip label={option.name} color="primary" deleteIcon={<DoneIcon />} clickable className="active" onClick={() => changeSearchType(option.type)} /></Box>)
                    } else {
                        return (<Box mr={1} key={k}><Chip mr={1} label={option.name} variant="outlined" clickable onClick={() => changeSearchType(option.type)} /></Box>)
                    }
                })
            }
        </Box>
    )
}

export default SearchType

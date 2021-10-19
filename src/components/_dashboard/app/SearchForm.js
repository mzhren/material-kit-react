import React from 'react'
import { Search } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import {
    InputBase,
    IconButton,
    Box,
} from '@material-ui/core';



const SearchForm = ({ action, query, placeholder,query2 }) => {

    const theme = useTheme();

    const searchBoxStyle = {
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 30,
        padding: 5,
        paddingLeft:15
    }

    function handleSubmit(e) {
        let search_text = document.querySelector('#search-text').value;
        if (!search_text) {
            e.preventDefault();
            return false;
        }
    }
    return (
        <div className="search-form-container">
            <form action={action} method="get" target="_blank" onSubmit={handleSubmit}>
                <Box style={searchBoxStyle} m={2} pl={1} display="flex">
                    <InputBase id="search-text" border={0} fullWidth name={query} placeholder={placeholder} />
                    <IconButton type="submit" aria-label="search" onSubmit={handleSubmit}>
                        <Search />
                    </IconButton>
                </Box>
                <input type="hidden" id="hidden-text" className="input-hidden" name="from" value="startpage.site" />
                <input type="submit" className="btn-submit" value="提交" hidden />
                { query2 && <input type="hidden" id="hidden-query-2" className="input-hidden" name={query2.name} value={query2.value} />}
            </form>
        </div>
    )
}

export default SearchForm

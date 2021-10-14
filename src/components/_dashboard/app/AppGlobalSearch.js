import React, { useState } from 'react'
import SearchForm from './SearchForm';
import searchOptions from './SearchOptionData';
import SearchType from './SearchType';
import SearchOption from './SearchOption';
import { Card, CardHeader, Box } from '@material-ui/core';

function AppGlobalSearch() {
    const [sType, setSType] = useState("most")
    let searchItems = searchOptions.find((option, k) => {
        return option.type === sType
    })
    let [sId, setSId] = useState(searchItems.default)
    let defaultSObj = searchItems.items.find((item, k) => item.id === searchItems.default)
    let [sObj, setSObj] = useState(defaultSObj)


    function typeChanged(sType) {
        searchItems = searchOptions.find((option, k) => {
            return option.type === sType
        })
        setSId(searchItems.default);
        let defaultSObj = searchItems.items.find((item, k) => item.id === searchItems.default)
        setSObj(defaultSObj)
    }

    const changeSearchType = (type) => {
        setSType(type);
        typeChanged(type);
    }

    const changeSObj = (item) => {
        setSObj(item);
        setSId(item.id);
    }


    return (
        <Card>
            <CardHeader title="全网搜索" />
            <Box p={3} sx={{pb:4}} dir="ltr">
                <SearchType searchOptions={searchOptions} sType={sType} changeSearchType={changeSearchType} />
                <SearchForm {...sObj} />
                <SearchOption searchItems={searchItems.items} sId={sId} changeSObj={changeSObj} />
            </Box>
        </Card>
    )
}

export default AppGlobalSearch

import React from 'react'
import LinkCard from './LinkCard'

function LinkList() {
    return (
        <div>
            {
                [{ name: "java", desc: "java site" }, { name: "python", desc: "python site" }].map((item) => (
                    < LinkCard key={item.name} link={item} />
                ))
            }
        </div>
    )
}

export default LinkList

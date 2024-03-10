import React from 'react'
import { FlexBox } from '../../components/reusables/AllContainers'
import { Typography } from '@mui/material'

const HomeFAQ = () => {

    const faq = [{
        q: 'Question',
        a: 'ans'
    }, {
        q: 'Question',
        a: 'ans'
    }, {
        q: 'Question',
        a: 'ans'
    }, {
        q: 'Question',
        a: 'ans'
    },
    ]
    return (
        <>
            {faq.map((item, idx) => (
                <FAQItem q={item.q} a={item.a} />
            ))}

            <FlexBox>

            </FlexBox>

        </>
    )
}

const FAQItem = ({ q, a }) => {
    return (
        <>
            <Typography>{q}</Typography>
            <Typography>{a}</Typography>
        </>
    )
}

export default HomeFAQ
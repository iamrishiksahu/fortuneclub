import React from 'react'
import { FlexBox } from '../../components/reusables/AllContainers'
import { Accordion, Typography } from '@mui/material'

const HomeFAQ = () => {

    const faq = [{
        q: 'How to play games on Fortune Club?',
        a: "Simply go to Login tab and login to your account. If you don't have an account, click on create an account from Login page."
    }, {
        q: 'What payment methods are supported?',
        a: 'Currently, we support UPI and Debit/Credit cards along with various wallets. Soon we will start supporting cryptocurrencies.'
    }, {
        q: 'How much time is taken to withdraw money?',
        a: 'Once you place a withdrawl request, our team processes it and sends it to you within 12hrs to 48hrs.'
    }, {
        q: 'Is this platform safe and secure?',
        a: 'This platform is completely safe to use and we abide to all the regulations. We have a highly qualified and dedicated team to handle security so that you can trustfully start playing at our platform.'
    },
    ]
    return (
        <>


            <FlexBox column sx={{ 
                justifyContent: 'flex-start', 
                padding: '0 1rem',
                margin: '3rem 0' }}>

                <Typography variant='h3' sx={{
                    fontWeight: '700',
                    fontStyle: 'italic',
                    color:'var(--yellow-1)',
                    borderBottom: '1px dashed var(--purple2)',
                }}>FAQs</Typography>


                {faq.map((item, idx) => (
                    <FAQItem q={item.q} a={item.a} />
                ))}
            </FlexBox>

        </>
    )
}

const FAQItem = ({ q, a }) => {
    return (
        <>
            <Typography textAlign={'left'} width={'100%'} sx={{
                fontWeight: '600',
                fontSize: '1.125rem'
            }}>{q}</Typography>
            <Typography textAlign={'left'} width={'100%'} sx={{
                color: 'var(--text1)'
            }}>{a}</Typography>
        </>
    )
}

export default HomeFAQ
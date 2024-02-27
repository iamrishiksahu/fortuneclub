import { Box, Button, Typography } from "@mui/material"
import { FlexBox, PageParent } from "../reusables/AllContainers"
import styled from "styled-components"

const FundsWidget = ({ amount }) => {

    if (!amount) {
        // Fetch the amount from here.
        amount = '2450.80'
    }
    return (
        <>
            <PageParent>
                <FlexBox column sx={{
                    backgroundColor: 'var(--bg-white)',
                    padding: '1rem 3rem',
                    borderRadius: '1rem',
                }} >
                    <Typography variant="small">Available Funds</Typography>
                    <Typography variant="h2">₹{amount}</Typography>

                </FlexBox>
                <FlexBox sx={{ width: '100%' }}>
                    <FundsActionButton variant="contained" sx={{ width: '50%', display: 'flex', gap: '1rem' }}>
                        <i class="bi bi-plus" />
                        Add
                    </FundsActionButton>
                    <FundsActionButton variant="contained" sx={{ width: '50%', display: 'flex', gap: '1rem' }}>
                        <i class="bi bi-arrow-90deg-right"></i>
                        Withdraw
                    </FundsActionButton>
                </FlexBox>

            </PageParent>
        </>
    )
}

export default FundsWidget

const FundsActionButton = styled(Button, {
    varian
})({
    width: '50%', 
    display: 'flex', 
    gap: '1rem'
})
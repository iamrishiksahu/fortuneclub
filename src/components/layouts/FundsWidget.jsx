import { Box, Button, Typography } from "@mui/material"
import { FlexBox, PageParent } from "../reusables/AllContainers"
import styled from "styled-components"

const FundsWidget = ({ amount }) => {

    if (!amount) {
        // Fetch the amount from here.
        amount = '1050.80'
    }
    return (
        <>
            <PageParent>

                <FlexBox sx={{
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'var(--bg-white2)',
                    padding: '1rem 2rem',
                    borderRadius: '1rem',
                    position: 'relative',
                    // boxSizing: 'content-box'
                }} >

                    <FlexBox column sx={{
                        position: 'absolute',
                        left: '1rem',
                        height: '9rem',
                        alignItems: 'flex-start',
                        // background: 'orange'
                        backgroundImage: 'url(/assets/common/funds_bg.svg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        padding: '1rem'

                    }}>
                        <Typography variant="small">Available Funds</Typography>
                        <Typography variant="h5">₹{amount}</Typography>

                    </FlexBox>
                    <FlexBox column sx={{ width: '60%', alignItems: 'flex-end' }}>
                        <FundsActionButton variant="outlined" sx={{ width: '50%', display: 'flex', gap: '1rem' }}>
                            <i class="bi bi-plus" />
                            Recharge
                        </FundsActionButton>
                        <FundsActionButton variant="outlined" sx={{ width: '50%', display: 'flex', gap: '1rem' }}>
                            <i class="bi bi-arrow-90deg-right"></i>
                            Withdraw
                        </FundsActionButton>
                    </FlexBox>

                </FlexBox>


            </PageParent>
        </>
    )
}

export default FundsWidget

const FundsActionButton = styled(Button)({
    width: '50%',
    display: 'flex',
    gap: '1rem'
})
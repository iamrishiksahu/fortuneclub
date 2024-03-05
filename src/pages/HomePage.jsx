import React from "react";
import { FlexBox, PageParent } from "../components/reusables/AllContainers";
import { Button, Typography } from "@mui/material";

const HomePage = () => {

    return(
    <PageParent>

        {/* MENU BAR */}

        {/* HEADER */}

        <FlexBox>
        {/* LEFT */}
            <FlexBox column alignItems={'flex-start'}>
                <Typography variant="h3" color={"var(--text-black)"} fontWeight={700} textAlign={'left'}>BUILD YOUR FORTUNE</Typography>
                <Typography variant="h3" color={"var(--purple1)"} fontWeight={700} textAlign={'left'}>PLAY GAMES</Typography>
                <Button variant="contained">Get Started</Button>

            </FlexBox>


        {/* RIGHT */}
        <FlexBox>
                <img style={{width: '300px'}} src="/assets/common/home-hero-image.png" />

        </FlexBox>
        
    </FlexBox>
    


    </PageParent>
    )

}

export default HomePage
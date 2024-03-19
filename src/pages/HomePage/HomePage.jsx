import React from "react";
import { FlexBox, PageParent } from "../../components/reusables/AllContainers";
import { Typography } from "@mui/material";
import HomeFAQ from "./HomeFAQ";
import FootNote from "../../components/layouts/FootNote";
import GamesList from "./GamesList";
import HomeNav from "./HomeNav";

const HomePage = () => {

    return (
        <PageParent paddingLeft={'2rem'} paddingRight={'2rem'}>

            {/* MENU BAR */}
            <HomeNav/>
            {/* HEADER */}
            <FlexBox sx={{
                margin: '3rem 0'
            }}>
                {/* LEFT */}
                <FlexBox column >
                    <Typography variant="p" color={"var(--text-black)"} fontWeight={400} textAlign={'center'}>Win Upto <span style={{fontSize: '1.5rem', fontStyle: 'italic', fontWeight: '600'}}>450%</span> Welcome Bonus!</Typography>
                    <Typography variant="h2"
                    sx={{
                        fontStyle: 'italic',
                        color: 'var(--text-black)',
                        fontWeight: '700',
                        textAlign: 'center',
                        textShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
                    }}
                    
                    
                    >BUILD YOUR FORTUNE</Typography>
                    <Typography variant="h3" color={"var(--yellow-1)"} fontWeight={700} textAlign={'center'}>PLAY 100% Fair Games</Typography>

                </FlexBox>

            </FlexBox>

            {/* GAMES LIST */}
            <GamesList/>

            <HomeFAQ />

            {/* DISCLAIMER TEXT */}
            <Typography variant="body2" sx={{color: 'var(--text1)'}}>DISCLAIMER</Typography>
            <Typography variant="body2" sx={{color: 'var(--text1)', fontSize: '0.5rem', textAlign: 'justify'}}>
            This game may be habit-forming or financially risky. Play responsibly. FortuneClub is an emerging high quality social gaming app. FortuneClub is only available for people who are above 18 years of age. FortuneClub is available only in those Indian states where skill gaming is allowed by regulations Playing from other states is prohibited. All games and tournaments under this platform are completely fair and guaranteed to be bot-free and free of any kind of manipulation. Games may be addictive in nature, and may involve financial risks. Player of any of the game voluntarily agrees to play on their own risk and liability. FortuneClub Games Pvt. Ltd. is the sole owner of and reserves the right to “FortuneClub” trademark, logos, assets, content, information, etc. used in the website except the third party content. FortuneClub Games Pvt. Ltd. does not acknowledge the accuracy or reliability of third party content.
             
            </Typography>

            <FootNote />

        </PageParent>
    )

}

export default HomePage
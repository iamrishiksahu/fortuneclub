import React from "react";
import { FlexBox, PageParent } from "../../components/reusables/AllContainers";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeFAQ from "./HomeFAQ";
import FootNote from "../../components/layouts/FootNote";

const HomePage = () => {

    const navigate = useNavigate()

    return (
        <PageParent>

            {/* MENU BAR */}

            <FlexBox sx={{
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {/* LEFT */}
                <FlexBox sx={{
                    justifyContent: 'flex-start'
                }}>
                    <i class="bi bi-list" style={{ fontSize: '2rem' }}></i>

                    <img src="/assets/common/app_logo.png" width={'124px'} />

                </FlexBox>
                <Button onClick={() => navigate('/login')} variant="contained" sx={{
                    background: 'var(--button-purple-gradient1)',
                    padding: '.375rem 2rem'
                }}>
                    Login
                </Button>
            </FlexBox>

            {/* HEADER */}

            <FlexBox sx={{
                marginTop: '4rem'
            }}>
                {/* LEFT */}
                <FlexBox column >
                    <Typography variant="h3" color={"var(--text-black)"} fontWeight={700} textAlign={'center'}>BUILD YOUR FORTUNE </Typography>
                    <Typography variant="h3" color={"var(--purple1)"} fontWeight={700} textAlign={'center'}>PLAY 100% Fair Games</Typography>



                </FlexBox>

            </FlexBox>

            <FlexBox column>
                <FlexBox column
                    onClick={() => navigate('/games/win-go')}

                    sx={{
                        borderRadius: '1rem',
                        background: 'linear-gradient(45deg, var(--bg-white2), var(--bg-white3))',
                        padding: '2rem',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '20rem',
                        height: '20rem',
                        // aspectRatio: '1/1',
                        position: 'relative',
                        cursor: 'pointer'
                    }}>

                    <FlexBox justifyContent={'space-between'}>

                        <img src="/assets/common/WinGO_title.png"
                            width={'90px'}
                            style={{
                                backgroundColor: 'var(--bg-white)',
                                padding: '0.5rem 1rem',
                                borderRadius: '.5rem'
                            }} />
                        <Typography
                            variant="body2"
                            sx={{
                                borderRadius: '0.5rem',
                                padding: '0.25rem .5rem',
                                backgroundColor: 'var(--purple1)',

                            }}>New Launch!</Typography>
                    </FlexBox>

                    <img style={{
                        width: '80%',
                        opacity: '0.1',
                        position: 'absolute',
                        top: '5rem'
                    }} src="/assets/common/line-chart-demo.png" />
                    <FlexBox>

                        <img width={'12%'} src="/assets/coins/coin_7.png" alt="0" />
                        <img width={'15%'} style={{ marginTop: '5rem' }} src="/assets/coins/coin_6.png" alt="0" />
                        <img width={'10%'} style={{ marginTop: '-5rem' }} src="/assets/coins/coin_0.png" alt="0" />
                        <img width={'10%'} style={{ marginTop: '6rem' }} src="/assets/coins/coin_8.png" alt="0" />
                        <img width={'13%'} style={{ marginTop: '2rem' }} src="/assets/coins/coin_3.png" alt="0" />
                    </FlexBox>

                    <FlexBox justifyContent={'flex-end'}>

                        <Button variant="outlined">Play Now!</Button>

                    </FlexBox>

                </FlexBox>

            </FlexBox>

            <HomeFAQ />

            <FootNote />



        </PageParent>
    )

}

export default HomePage
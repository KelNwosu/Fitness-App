import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from "../assets/images/banner.png"
import HomePage from "../assets/images/homepage.jpg"

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px' }, ml: { sm: '50' }
        }} position="relative" p="20px" >
            <Typography color="#FF2625" fontWeight='600' fontSize="26px">
                Reps On Reps
            </Typography>
            <Typography fontWeight="700"
                sx={{
                    fontSize: {
                        lg: '44px', xs: "40px"
                    }
                }}
                mb="23px" mt="30px"
            >
                Time To <br /> Sweat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4} >
                Check out the most effective exercises!
            </Typography>
            <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: "#ff2625", padding: "10px" }} >
                Discover Exercises
            </Button>
            <Typography
                fontWeight={600}
                color="#ff2625"
                sx={
                    {
                        opacity: 0.1,
                        display: { lg: 'block', xs: "none" }
                    }
                }
                fontSize="200px"
            >
                Exercise
            </Typography>
            <img src={HomePage} alt="banner"
                className="hero-banner-img" />
        </Box>
    )
}

export default HeroBanner
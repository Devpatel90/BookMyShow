import React from 'react'
import Icon1 from "../../public/icon1.svg";
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedCameraOutlinedIcon from '@mui/icons-material/LinkedCameraOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';

function Footer() {
  return (
    <>
    <footer className='bg-[#313035] flex flex-col items-center justify-center pb-20 mt-10'>
        <div className='part1 flex justify-evenly pt-7 w-[90%]'>
            <div className='flex items-center gap-5'>
            <img src={Icon1} alt="" />
            <h1 className='text-white font-bold'>List your show</h1>
            <p className='text-white'>Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</p>
            </div>
            <button className='bg-[#ec5e71] text-white py-2 px-4 rounded-lg'>Contact today!</button>
        </div>
        <div className="part2 py-5 mt-10 bg-[#404043] flex justify-evenly w-full items-center">
            <div className='flex flex-col items-center gap-3 justify-center'>
                <SupportAgentOutlinedIcon fontSize='large' className='text-gray-400' />
                <h1 className='text-gray-400 uppercase text-xs text-center'>24/7 Customer Care</h1>
            </div>
            <div className='flex flex-col items-center gap-3 justify-center'>
                <ConfirmationNumberOutlinedIcon fontSize='large' className='text-gray-400'/>
                <h1 className='text-gray-400 uppercase text-xs text-center'>Resend Booking Confirmation</h1>
            </div>
            <div className='flex flex-col items-center gap-3 justify-center'>
                <MarkAsUnreadOutlinedIcon fontSize='large' className='text-gray-400'/>
                <h1 className='text-gray-400 uppercase text-xs text-center'>Subscribe to the newsletter</h1>
            </div>
        </div>
        <div className='part3 flex w-[90%] flex-col gap-7 justify-center items-center mt-10'>
            <div className='flex flex-col gap-2 w-[80%]'>
                <h1 className='text-gray-400 uppercase'>Movies now showing in Mumbai</h1>
                <p className='text-gray-500 text-xs'>
                    <span>Chhaava</span> | <span>Sanam Teri Kasam</span> | <span>Umbarro</span> | <span>Loveyapa</span> | <span>Captain America:Brave New World</span> | <span>Sky Force</span> | <span>Deva</span> | <span>Faati Ne?</span> | <span>Badaas Ravi Kumar</span> | <span>Interstellar</span>
                </p>
            </div>
            <div className='flex flex-col gap-2 w-[80%]'>
                <h1 className='text-gray-400 uppercase'>Upcoming Movies in Mumbai</h1>
                <p className='text-gray-500 text-xs'>
                    <span>Brahma Anandam</span> | <span>2K Love Story</span> | <span>Illti</span> | <span>Daveed</span> | <span>Kaadhal Enbadhu Podhu Udamai</span> | <span>Dinasari</span> | <span>Justice</span> | <span>Kismat</span> | <span>Fire (2025)</span> | <span>Kanneera</span>
                </p>
            </div>
            <div className='flex flex-col gap-2 w-[80%]'>
                <h1 className='text-gray-400 uppercase'>Movie updates and celebrities</h1>
                <p className='text-gray-500 text-xs'>
                    <span>Upcoming Movies</span> | <span>Movies Now Showing</span> | <span>Movie Celebrities</span>
                </p>
            </div>
            <div className='flex flex-col gap-2 w-[80%]'>
                <h1 className='text-gray-400 uppercase'>Movies per week</h1>
                <p className='text-gray-500 text-xs'>
                    <span>Movies Playing Today</span> | <span>Movies Playing Tomorrow</span> | <span>Movies Playing This Weekend</span>
                </p>
            </div>
            <div className='flex flex-col gap-2 w-[80%]'>
                <h1 className='text-gray-400 uppercase'>Movies by genre</h1>
                <p className='text-gray-500 text-xs'>
                    <span>Action Movies</span> | <span>Drama Movies</span> | <span>Romantic Movies</span> | <span>Thriller Movies</span> | <span>Comedy Movies</span> | <span>Historical Movies</span> | <span>Adventure Movies</span> | <span>Sci-Fi Movies</span> | <span>Anime Movies</span> | <span>Classic Movies</span>
                </p>
            </div>
            <div className='flex flex-col gap-2 w-[80%]'>
                <h1 className='text-gray-400 uppercase'>Upcoming Movies by genre</h1>
                <p className='text-gray-500 text-xs'>
                    <span>Movies in Drama</span> | <span>Movies in Thriller</span> | <span>Movies in Action</span> | <span>Movies in Comedy</span> | <span>Movies in Romantic</span> | <span>Movies in Crime</span> | <span>Movies in Horro</span> | <span>Movies in Adventure</span> | <span>Movies in Suspense</span> | <span>Movies in Fantasy</span>
                </p>
            </div>
            <div className='flex flex-col gap-2 w-[80%]'>
                <h1 className='text-gray-400 uppercase'>Movies by language</h1>
                <p className='text-gray-500 text-xs'>
                    <span>Movies in Hindi</span> | <span>Movies in English</span> | <span>Movies in Gujarati</span> | <span>Movies in Telugu</span> | <span>Movies in Tamil</span> | <span>Movies in Sindhi</span> | <span>Movies in Chattisgarhi</span> | <span>Movies in Japanese</span> | <span>Movies in Khasi</span> | <span>Movies in Tulu</span>
                </p>
            </div>
            <div className='flex flex-col gap-2 w-[80%]'>
                <h1 className='text-gray-400 uppercase'>Movies by Format</h1>
                <p className='text-gray-500 text-xs'>
                    <span>Movies in 2D</span> | <span>Movies in 3D</span> | <span>Movies in ICE</span> | <span>Movies in 4DX 3D</span> | <span>Movies in IMAX 3D</span> | <span>Movies in MX4D 3D</span> | <span>Movies in 2D SCREEN X</span> | <span>Movies in 7D</span> | <span>Movies in 3D SCREEN X</span> | <span>Movies in MX4D</span>
                </p>
            </div>
            <div className='flex flex-col gap-2 w-[80%]'>
                <h1 className='text-gray-400 uppercase'>Upcoming Movies by Format</h1>
                <p className='text-gray-500 text-xs'>
                    <span>Movies in 2D</span> | <span>Movies in 3D</span> | <span>Movies in ICE</span> | <span>Movies in 4DX 3D</span> | <span>Movies in IMAX 3D</span> | <span>Movies in MX4D 3D</span> | <span>Movies in 2D SCREEN X</span> | <span>Movies in 7D</span> | <span>Movies in 3D SCREEN X</span> | <span>Movies in MX4D</span>
                </p>
            </div>
            <div className='flex flex-col gap-2 w-[80%]'>
                <h1 className='text-gray-400 uppercase'>Movies in top cities</h1>
                <p className='text-gray-500 text-xs'>
                    <span>Movies in Mumbai</span> | <span>Movies in Delhi-NCR</span> | <span>Movies in Chennai</span> | <span>Movies in Bengaluru</span> | <span>Movies in Hyderabad</span> | <span>Movies in Pune</span> | <span>Movies in Ahmedabad</span> | <span>Movies in Kolkata</span> | <span>Movies in Kochi</span> | <span>Movies in MX4D</span>
                </p>
            </div>
            <div className='flex flex-col gap-2 w-[80%]'>
                <h1 className='text-gray-400 uppercase'>Countries</h1>
                <p className='text-gray-500 text-xs'>
                    <span>Indonesia</span> | <span>Singapore</span> | <span>UAE</span> | <span>Sri Lanka</span> | <span>West Indies</span>
                </p>
            </div>
            <div className='flex flex-col gap-2 w-[80%]'>
                <h1 className='text-gray-400 uppercase'>Help</h1>
                <p className='text-gray-500 text-xs'>
                    <span>About Us</span> | <span>Contact Us</span> | <span>Current Opening</span> | <span>Press Release</span> | <span>Press Coverage</span> | <span>Sitemap</span> | <span>FAQs</span> | <span>Terms and Conditions</span> | <span>Privacy Policy</span>
                </p>
            </div>
            <div className='flex flex-col gap-2 w-[80%]'>
                <h1 className='text-gray-400 uppercase'>Bookmyshow exclusives</h1>
                <p className='text-gray-500 text-xs'>
                    <span>Lollapalooza India</span> | <span>BookAChange</span> | <span>Corporate Vouchers</span> | <span>Gift Cards</span> | <span>List My Show</span> | <span>Offers</span> | <span>Stream</span> | <span>Trailers</span>
                </p>
            </div>
        </div>
        <div className="part4 w-full flex items-center justify-center gap-10 mt-20">
        <hr className='bg-gray-500 size-0.5 w-[40%]' />
            <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" />
            <hr className='bg-gray-500 size-0.5 w-[40%]' />
        </div>
        <div className='icons flex justify-center items-center gap-7 mt-15'>
            <FacebookOutlinedIcon fontSize='large' className='text-gray-500' />
            <LinkedCameraOutlinedIcon fontSize='large' className='text-gray-500' />
            <SubscriptionsOutlinedIcon fontSize='large' className='text-gray-500' />
        </div>
        <div className='w-[90%]'>
            <h1 className='text-xs text-gray-500 text-center mt-10'>Copyright 2025 &copy; Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</h1>
            <h1 className='text-xs text-gray-500 text-center mt-2'>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</h1>
        </div>
    </footer>
    </>
  )
}

export default Footer

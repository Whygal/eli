import React from 'react'
import { WhatsappIcon, TwitterIcon, FacebookIcon, LinkedinIcon, PinterestIcon , EmailIcon , } from 'react-share';
import {WhatsappShareButton, TwitterShareButton, FacebookShareButton, 
    LinkedinShareButton, EmailShareButton, PinterestShareButton} from 'react-share';
import {Typography, Box} from "@mui/material"

import "./style.css"
const ShareLink = () => {
    const url = "https://chabadmerkazhhitgalut.onrender.com/" 
  return (
    <div><Box display={"flex"} flexDirection={"row"} justifyContent={"center"} flexWrap={"wrap"}>
    <div className='ShareLink'>   
    <WhatsappShareButton
    url={url}
    quote={'שתף'}
    className="icon"
    >
        <WhatsappIcon size={50} round/>
     <Typography>Whatsapp</Typography>   
    </WhatsappShareButton>
    </div>
    <div className='ShareLink'> 
    <TwitterShareButton
    url={url}
    quote={'שתף'}
    className="icon"
    >
    <TwitterIcon size={50} round/>
    <Typography>Twitter</Typography>
    </TwitterShareButton>
    </div>
    <div className="ShareLink">
<FacebookShareButton
url={url}
quote="שתף"
className="icon"
>
<FacebookIcon size={50} round />
<Typography>Facebook</Typography>
</FacebookShareButton>
</div>
<div className="ShareLink">
<LinkedinShareButton
url={url}
quote="שתף"
className="icon"
>
<LinkedinIcon size={50} round />
<Typography>LinkedIn</Typography>
</LinkedinShareButton>
</div>
<div className="ShareLink">
<PinterestShareButton
url={url}
quote="שתף"
className="icon"
>
<PinterestIcon size={50} round />
<Typography>Pinterest</Typography>
</PinterestShareButton>
</div>
<div className="ShareLink">
<EmailShareButton
url={url}
quote="שתף"
className="icon"
>
<EmailIcon size={50} round />
<Typography>Email</Typography>
</EmailShareButton>
</div>
    </Box></div>
  )
}

export default ShareLink
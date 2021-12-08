import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Containter>
<Background>
    <img src="https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg"/>
</Background>
        </Containter>
    )
}

export default Detail

 const Containter=styled.div`
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5wh + 5px);
    position:relative;

 
 `
 const Background=styled.div`
 position:fixed;
 top:0;
 left:0;
 bottom:0;
 right:0;
 z-index:-1;
 opacity:0.8;
 img{
     width:100%;
     height:100%;
     object-fit:cover;
 }
 `
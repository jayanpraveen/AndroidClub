import React from 'react';
import ReactPlayer from 'react-player'
import {InfoContainer ,InfoWrapper,InfoRow,Column1,Column2,TextWrapper , TopLine,Heading ,Subtitle, ImgWrap,Img} from './AboutStyled';
import './Youtubes.css';
import logoSmall from '../../Images/Image.svg';

const About = ({lightBg,imgStart,topline,lightText,headline,darkText, description, img,alt}) => {
    return (
       
      <>
        <InfoContainer lightBg={lightBg}>

          <InfoWrapper>

              <InfoRow imgStart={imgStart}>
                  
                  <Column1>

                   <TextWrapper>
                       
                       <TopLine>{topline}</TopLine>
                       <Heading ligthText={lightText}>{headline}</Heading>
                       <Subtitle darkText={darkText}>{ description}</Subtitle>
                        
                   </TextWrapper>

                  </Column1>
                  <Column2>
                  
                  <ImgWrap>
                  <div className="Youtube">
                  <ReactPlayer  url="https://youtu.be/A2r9FCbX9UA"  controls   loop={true} width = "450px"  height = "350px" />
                  </div>
                  <Img src = {logoSmall} alt={alt}/>
                  </ImgWrap>
                  </Column2>
            

               </InfoRow>

          </InfoWrapper>

        </InfoContainer>
 

      </>

    )
}

export default About;
//
//<Img src={ img} alt={alt} width="100px" height="100px"/> 
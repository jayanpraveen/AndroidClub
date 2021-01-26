 import {DisplayList,DisplayH1,Teamgrid} from './TeamMainStyled'
  import Teams from './Teams'
 import React from 'react'
import styled from 'styled-components'
 
 const TeamMain = () => {
     return (
         <>
         <DisplayList id='team'>
           
           <DisplayH1> CORE TEAM 2020-2021 </DisplayH1>
           </DisplayList>
           <DisplayList >
           <Teamgrid>
           <Teams/>
           <Teams/>
           <Teams/>
           <Teams/>
           <Teams/>
           <Teams/>
           <Teams/>
           <Teams/>
           <Teams/>
           </Teamgrid>
           </DisplayList>
           </>  
      
     )
 }
 
 export default TeamMain;
 


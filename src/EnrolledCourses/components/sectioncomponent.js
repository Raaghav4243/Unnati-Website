import React from 'react';
import {EachContentContainer, EachContent} from './styledcomponents'

function Sectioncomponent(props) {
  return (
      <EachContentContainer>    
          <EachContent><img src={props.imgsrc} width="20vw" height="20vw"/>   {props.name}</EachContent>
      </EachContentContainer>     
  )
}

export default Sectioncomponent;
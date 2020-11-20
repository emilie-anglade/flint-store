
import React from 'react';
import DisplaySubCategories from './displaySubCategories/DisplaySubCategories';
import JsonFAke from './../static/JsonFAke.json';
import Styled from 'styled-components';

const Title = Styled.h1`
  text-align: center;
  margin: 30px;
  `;

const LightAndFire = () => {
 
  const allumette = JsonFAke.filter(items => items.fK_subCategory === 1);
  const lighter = JsonFAke.filter(items => items.fK_subCategory === 2);
  const torch = JsonFAke.filter(items => items.fK_subCategory === 3);
  const bbq = JsonFAke.filter(items => items.fK_subCategory === 4);

  const allumetteTitle = "Matches"; 
  const lighterTitle = "Lighters";
  const torchTitle = "Torches";
  const bbqTitle = "Barbecues"

  return (
    <>

      <Title>Fire and Light <span role="img" aria-label="fire">🔥</span></Title>
      
        <DisplaySubCategories props={allumette} title={allumetteTitle} />
      
      
        <DisplaySubCategories  props={lighter} title={lighterTitle} />
      
      
        <DisplaySubCategories props={torch} title={torchTitle} />
      
      
        <DisplaySubCategories props={bbq} title={bbqTitle} />
      

    </>
  );
}

export default LightAndFire;

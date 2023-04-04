import { css } from "styled-components";
import { useEffect } from 'react';

export const mobile = (props) => {
    return css `
    @media only screen and (max-width: 430px) {
      ${props}
    }
  `;
};


export const tablet = (props) => {
    return css `
    @media only screen and (max-width: 780px) {
      ${props}
    }
  `;
};



import React from "react";
import { ContentsInnerStyle } from 'portfolio/contents/ContentsStyle';

const EduContents = (props) => {

  return(
    <ContentsInnerStyle key={props.eduId}>
      <p> {props.eduName} </p>
      <p> {props.eduMajor} ({props.eduType})</p>
    </ContentsInnerStyle>
  );
};

export default EduContents;
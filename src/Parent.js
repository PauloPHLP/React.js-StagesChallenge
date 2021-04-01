import React, { useCallback, useEffect, useState } from "react";
import { Container, Heading } from "styled-minimal";
import "./styles.css";

import data from './data.json';

import Child from "./Child";

const stepsModified = data.steps.map((step) => {
  return {
    ...step,
    duration: data?.durations[step?.key]
  };
});

export default function Parent() {
  const [renderedChilds, setRenderedChilds] = useState([stepsModified[0]])

  const renderNext = useCallback(() => {
    if (renderedChilds.length !== stepsModified.length) {
      const nextPosition = renderedChilds.length;

      setRenderedChilds([...renderedChilds, stepsModified[nextPosition]]);
    }
  }, [renderedChilds]);

  return (
    <Container>
      <Heading mb={4} textAlign="center">
        Stages
      </Heading>
      {renderedChilds.map(step => 
        <Child key={step.key} color={step.value} duration={step.duration} renderNext={renderNext}/>
      )}
    </Container>
  );
}

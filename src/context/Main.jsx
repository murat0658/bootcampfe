import React from "react";
import PropTypes from "prop-types";
import Section from "./Section";
import Heading from "./Heading";

function Main() {
  return (
    <Section>
      <Heading>Header level 1</Heading>
      <Heading>Header level 1</Heading>
      <Heading>Header level 1</Heading>
      <Section>
        <Heading>Header level 2</Heading>
        <Heading>Header level 2</Heading>
        <Heading>Header level 2</Heading>
        <Section>
          <Heading>Header level 3</Heading>
          <Heading>Header level 3</Heading>
          <Heading>Header level 3</Heading>
          <Section>
            <Heading>Header level 4</Heading>
            <Heading>Header level 4</Heading>
            <Heading>Header level 4</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

Main.propTypes = {};

export default Main;

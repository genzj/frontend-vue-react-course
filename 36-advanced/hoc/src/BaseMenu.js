import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MenuContainer = styled.div`
  position: relative;
  font: 14px sans-serif;
`;

const MenuPosition = styled.div`
  position: absolute;
  top: ${props => props.offsetTop}px;
  left: 0;
  z-index: 1;
`;

const Wrapper = styled.ul`
  min-width: 150px;
  padding: 0 5px;
  border-radius: 4px;
  background-color: #fff;
  border: solid 1px #ccc;
`;

export const Item = styled.li`
  border-bottom: 1px solid #d8d8d8;
  list-style: none;
  margin: 0;

  &:last-child {
    border-bottom: none;
  }
`;

const Link = styled.a`
  display: flex;
  color: #4751a2;
  text-decoration: none;
  padding: 10px 5px;
  line-height: 1.3;

  &:hover {
    text-decoration: underline;
  }
`;

const BaseMenu = props => (
  <MenuContainer ref={props.containerRef}>
    {props.children}
    
    {(!props.children || props.open) && (
      <MenuPosition offsetTop={props.offsetTop}>
        <Wrapper>
          {props.items.map(item => (
            <Item key={item.label}>
               <Link href={item.link}>
                {item.icon}
                {item.label}
               </Link>
            </Item>
          ))}
        </Wrapper>
      </MenuPosition>
    )}
  </MenuContainer>
);

BaseMenu.propTypes = {
  children: PropTypes.node, // The toggle element
  containerRef: PropTypes.shape({}),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      icon: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired,
  offsetTop: PropTypes.number,
  open: PropTypes.bool
};

BaseMenu.defaultProps = {
  children: undefined,
  containerRef: null,
  offsetTop: 0,
  open: false
};

export default BaseMenu;

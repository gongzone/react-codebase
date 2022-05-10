import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

const StyledButton = styled.button<ButtonProps>`
  color: white;
  background-color: ${({ variant }) => (variant === 'primary' ? 'blue' : 'green')};
`;

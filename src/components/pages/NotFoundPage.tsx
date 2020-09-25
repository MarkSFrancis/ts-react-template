import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function NotFoundPage() {
  const { pathname } = useLocation();
  const Container = styled.div`
    margin: 1rem;
  `;

  return (
    <Container>
      <h1>404 - Not found</h1>
      <p>
        The page <code>{pathname}</code> was not found
      </p>
      <Link to="/">Head back home</Link>
    </Container>
  );
}

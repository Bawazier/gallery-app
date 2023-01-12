import { Container } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <>
      <Container
        maxW={{
          base: "container.fluid",
          sm: "container.sm",
        }}
        minH="100vh"
      >
        {children}
      </Container>
    </>
  );
}

import { Container } from './style';

function Footer() {
  return (
    <Container>
      <div>
        <svg
          width="26"
          height="30"
          viewBox="0 0 26 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0635 0.0510254L25.7096 7.35221V21.9546L13.0635 29.2557L0.417527 21.9546V7.35221L13.0635 0.0510254Z"
            fill="white"
            fill-opacity="0.3"
          />
        </svg>
        <h4>food explorer</h4>
      </div>
      <div className="copyright">
        <span>&#169; 2022 - Todos os direitos reservados.</span>
      </div>
    </Container>
  );
}

export { Footer };

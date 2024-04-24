import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <h1>Pagina de contatos</h1>

      <p>
        <Link to="/contact/1">Forma de Contato</Link>
      </p>
      <p>
        <Link to="/contact/2">Forma de Contato</Link>
      </p>
      <p>
        <Link to="/contact/3">Forma de Contato</Link>
      </p>
      <p>
        <Link to="/contact/4">Forma de Contato</Link>
      </p>
    </>
  );
}

export default Contact;

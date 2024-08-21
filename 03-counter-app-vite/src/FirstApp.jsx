import PropTypes from 'prop-types';

const newMessage = {
  message: 'Hola mundo',
  title: 'Fernado'
};

const imprimeObjeto = (objeto) => JSON.stringify(objeto);

export const FirstApp = ({
  title,
  subTitle,
  name
}) => {

  // if (!title) throw new Error('Titulo no existe');

  return (
    <>
      <h1>{title} <small>{name}</small></h1>
      <code>{imprimeObjeto(newMessage)}</code>
      {/* <code>{newMessage}</code> */}
      <p>{subTitle + 1}</p>
    </>
  )
}

FirstApp.propTypes = {
  name: PropTypes.string,
  subTitle: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}
FirstApp.defaultProps = {
  name: 'Simón Astudillo',
  subTitle: 'No hay subtitulo',
  title: 'No hay título',
}
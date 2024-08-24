import PropTypes from 'prop-types';

const newMessage = {
  message: 'Hola mundo',
  title: 'Fernado'
};

const imprimeObjeto = (objeto) => JSON.stringify(objeto);

export const FirstApp = ({
  name = 'Simón Astudillo',
  subTitle = 'No hay subtitulo',
  title
}) => {

  // if (!title) throw new Error('Titulo no existe');
  // console.log(subTitle);
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  name: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}
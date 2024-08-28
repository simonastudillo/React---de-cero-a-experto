import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
// Tarea:
// 1. Añadir PropTypes
//    - title: string obligatorio
//    - url: string obligatorio
// 2. Evaluar el snapchot

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
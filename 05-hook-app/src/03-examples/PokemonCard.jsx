export const PokemonCard = ({ id, name, sprite = [] }) => {
  return (
    <section
      style={{ height: 200 }}>
      <h2 className="text-capitalize">#{id}  {name}</h2>
      {
        sprite.map((sprite, index) => {
          return (
            <img key={index} src={sprite} />
          )
        })
      }
    </section>
  )
}

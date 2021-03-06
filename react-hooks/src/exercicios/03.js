import * as React from 'react'

function Name() {
  const [name, setName] = React.useState('')
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={event => setName(event.target.value)} />
    </div>
  )
}

// ð¨ aceite as props `animal` e `onAnimalChange` neste componente
function FavoriteAnimal({animal, onAnimalChange}) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

// ð¨ descomente isso
// function Display({name, animal}) {
//   return <div>{`OlÃ¡ ${name}, seu animal favorito Ã©: ${animal}!`}</div>
// }

function Display({animal}) {
  return <div>{`Seu animal favorito Ã©: ${animal}!`}</div>
}

// ð£ exclua esse componente e use o novo
//function Display({name}) {
//  return <div>{`Hey ${name}, you are great!`}</div>
//}

function App() {
  // ð¨ adicione um useState para o animal
  const [animal, setAnimal] = React.useState('')
  return (
    <form>
      <Name />
      {/* ð¨ passe o animal e a prop onAnimalChange aqui (similar ao componente Name acima) */}
      <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal(event.target.value)} />
      {/* ð¨ passe a prop do animal aqui */}
      <Display animal={animal} />
    </form>
  )
}

export default App
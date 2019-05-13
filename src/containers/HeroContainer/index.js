import React, { Component } from 'react';
import TableFilter from '../../components/TableFilter'
import HeroTable from '../../components/HeroTable'
import HeroForm from '../../components/HeroForm'
import { connect } from 'react-redux'
import { killHero, putRing, handleInputChange, toggleForm, saveHero } from '../../redux/heroes'
import './style.css';

const HeroContainer = (props) => {
  const { heroes, heroIdUsingRing, killHero, putRing, handleInputChange, filterText, usingForm, saveHero, toggleForm } = props

  return (
    <div className="index">
    <TableFilter handleChange={handleInputChange} placeHolder='Buscar por nombre...' value={filterText}/>
    <button onClick={toggleForm} className="boton">Agregar Nuevo Heroe</button>
     <HeroTable
        heroes={heroes}
        killHero={killHero}
        putRing={putRing}
        usingRing={heroIdUsingRing}
      />
      {usingForm && <HeroForm heroSubmit={saveHero} />}
    </div>
  )
}

const mapStateToProps = state => {
  const { heroesList, entities, heroIdUsingRing, filterText, usingForm } = state
  console.log('filterText=>'+filterText);

  let filteredHeroes = heroesList.map(hero => entities[hero])

  if (filterText) {
    filteredHeroes = filteredHeroes.filter(hero => {
      return hero.name.toLowerCase().includes(filterText)
    })
  }

  console.log(filteredHeroes);

  return {
    heroes: filteredHeroes,
    heroIdUsingRing,
    filterText,
    usingForm
  }
}

const mapDispatchToProps = {
  killHero,
  putRing,
  handleInputChange,
  toggleForm,
  saveHero
}

export default  connect(mapStateToProps, mapDispatchToProps)(HeroContainer)

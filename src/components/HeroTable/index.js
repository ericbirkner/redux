import React from 'react'
import HeroRow from './HeroRow'

const HeroTable = ({heroes, killHero, putRing, usingRing}) => (
  <table className="characters-table" border='1' align='center'>
    <tbody>
      <tr className="character-row">
        <th>Name</th>
        <th>Race</th>
        <th>Age</th>
        <th>Weapon</th>
        <th></th>
      </tr>

      {heroes.map((hero, index) => (
        <HeroRow
          key={index}
          hero={hero}
          killHero={killHero}
          putRing={putRing}
          usingRing={usingRing}
        />
      ))}
    </tbody>
  </table>
)

export default HeroTable

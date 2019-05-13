const KILL_HERO = 'KILL_HERO'
const PUT_RING = 'PUT_RING'
const INPUT_CHANGE = 'INPUT_CHANGE'
const TOGGLE_FORM = 'TOGGLE_FORM'
const SAVE_HERO = 'SAVE_HERO'

export const killHero = id => {
  console.log('IM BEING CALLED 1')
  return ({
    type: KILL_HERO,
    payload: {
      id
    }
  })
}

export const putRing = id => {
  console.log('FUNCTION PUT_RING')
  return ({
    type: PUT_RING,
    payload: {
      id
    }
  })
}

export const handleInputChange = (e) => {
  return ({
    type: INPUT_CHANGE,
    payload: {
      e
    }
  })
}

export const toggleForm = () => {
  return({
    type: TOGGLE_FORM,
    payload:{

    }
  })
}

export const saveHero = (values) => {
  console.log('SAVE_HERO')
  return ({
    type: SAVE_HERO,
    payload: {
      values
    }
  })
}

const editEntity = (state,id,params)=>{
  return{
    ...state.entities,
    [id]:{
      ...state.entities[id],
      ...params
    }
  }
}

export default (state = initialState, action) => {
  console.log('Llega al reducer la action', action)
  switch (action.type) {

    case KILL_HERO:{
      console.log('Llego la action', KILL_HERO)
      const { id } = action.payload
      const withoutDeadHero = state.heroesList.filter(heroId => heroId !== id)

      return {
        ...state,
        entities: editEntity(state,id,{status:'dead'}),
        heroesList: [...withoutDeadHero, id]
      }
    }

    case PUT_RING:{
      console.log('usando PUT_RING');
      const { id } = action.payload

      return{
        ...state,
        entities: editEntity(state,id,{status:'using-ring'}),
        heroIdUsingRing:id
      }
    }

    case TOGGLE_FORM:{
      console.log('holi desde toggleForm');
      return({
        ...state,
        usingForm: !state.usingForm
      })
    }

    case INPUT_CHANGE:{
      //console.log('INPUT_CHANGE');
      const { e } = action.payload
      console.log(e.target.value);
      return{
        ...state,
        filterText: e.target.value
      }
      console.log(state.filterText);
    }

    case SAVE_HERO:{
      const { values } = action.payload
      console.log(values)
      const newId = state.heroesList.length + 1

      return{
        ...state,
        entities: {
          ...state.entities,
          [newId]: {
            ...values,
            id: newId
          }
        },
        heroesList: [...state.heroesList, newId],
        usingForm: false
      }

    }

    default: return state
  }
}

const initialState = {
  entities: {
    '1': { id: '1', name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑' },
    '2': { id: '2', name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔' },
    '3': { id: '3', name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹' },
    '4': { id: '4', name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒' },
    '5': { id: '5', name: 'Frodo', race: 'Hobbit', age: '33', weapon: 'Dagger 🗡' }
  },
  heroesList: ['1', '2', '3', '4', '5'],
  heroIdUsingRing: null,
  filterText: '',
  usingForm: false
}

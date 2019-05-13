/*
    Manejar los metodos con redux
*/

class HeroContainerR extends Component {
    constructor (props) {
      super(props)
      this.state = {
        usingForm: false
      }
  
      this.handleInputChange = this.handleInputChange.bind(this)
      this.killHero = this.killHero.bind(this)
      this.putRing = this.putRing.bind(this)
      this.recoverRing = this.recoverRing.bind(this)
      this.toggleForm = this.toggleForm.bind(this)
      this.saveHero = this.saveHero.bind(this)
    }
  
    componentDidUpdate () {
      const { usingRing } = this.state
  
      if (usingRing) {
        document.title = 'Someone is using the Ring'
      }
    }
  
    killHero (id) {
      const { heroes, heroesList } = this.state
  
      let listWithoutKilledHero = heroesList.filter(heroId => heroId !== id )
  
      this.setState({
        heroes: {
          ...heroes,
          [id]: {
            ...heroes[id],
            status: 'dead'
          }
        },
        heroesList: [...listWithoutKilledHero, id]
      })
    }
  
    putRing (id) {
      const { heroes } = this.state
  
      this.setState({
        heroes: {
          ...heroes,
          [id]: {
            ...heroes[id],
            status: 'using-ring',
          }
        },
        heroIdUsingRing: id
      })
    }
  
    recoverRing () {
      const { heroIdUsingRing: heroId, heroes } = this.state
      
      this.setState({
        heroes: {
          ...heroes,
          [heroId]: {
            ...heroes[heroId],
            status: '',
          }
        },
        heroIdUsingRing: null
      })
    }
  
    handleInputChange (e) {
      this.setState({
        filterText: e.target.value
      })
    }
  
    toggleForm () {
      this.setState({
        usingForm: !this.state.usingForm
      })
    }
  
    saveHero (values) {
      const { heroes, heroesList } = this.state
      const newId = heroesList.length + 1
  
      this.setState({
        heroes: {
          ...heroes,
          [newId]: {
            ...values,
            id: newId
          }
        },
        heroesList: [...heroesList, newId],
        usingForm: false
      })
    }
  
    render() {
      const {
        filterText,
        heroes,
        heroesList,
        heroIdUsingRing,
        usingForm
      } = this.state
  
      let filteredHeroes = heroesList.map(heroId => heroes[heroId])
  
      if (filterText) {
        filteredHeroes = filteredHeroes.filter(hero => {
          return hero.name.toLowerCase().includes(filterText)
        })
      }
  
      return (
        <div className="index">
          <h2>Fellowship of the Ring</h2>
  
          {heroIdUsingRing && <button onClick={this.recoverRing}>Mostrar Anillo</button>}
          <button onClick={this.toggleForm}>Agregar Nuevo Heroe</button>
  
          {!usingForm && (
            <div className="container">
              <TableFilter
                filterText={filterText}
                handleChange={this.handleInputChange}
                placeHolder='Input search...'
              />
  
              {filteredHeroes.length > 0 && (
                <HeroTable
                  heroes={filteredHeroes}
                  killHero={this.killHero}
                  putRing={this.putRing}
                  usingRing={heroIdUsingRing}
                />
              ) }
  
              {filteredHeroes.length === 0 && <div>No heroes....</div> }
            </div>
          )}
  
          {usingForm && <HeroForm heroSubmit={this.saveHero} />}
          
        </div>
      )
    }
  }
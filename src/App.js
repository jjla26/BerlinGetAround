import React, { useState } from 'react'

import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'
import Areas from './constants/Areas'
import TimePeriods from './constants/TimePeriods'
import Categories from './constants/Categories'
import Options from './constants/Options'
import Tickets from './constants/Tickets'
import Details from './constants/Details'

import './App.css';

function App() {
  const [ name, setName ] = useState("")
  const [ step, setStep ] = useState("name")
  const [ error, setError ] = useState("")
  const [ questions, setQuestions ] = useState([
    {id:"name", question: "First, please tell us your name."},
  ])
  const [ selectedCategory, setSelectedCategory ] = useState(null)
  const [ selectedPeriod, setSelectedPeriod ] = useState(null)
  const [ selectedArea, setSelectedArea ] = useState(null)
  const [ selectedOption, setSelectedOption ] = useState(null)
  const [ selectedDetail, setSelectedDetail ] = useState(null)

  const filteredTickets = Tickets
    .filter(ticket => selectedCategory ? selectedCategory.id === ticket.category_id : true )
    .filter(ticket => selectedOption ? selectedOption.id === ticket.option_id : true )
    .filter(ticket => selectedPeriod ? selectedPeriod.id === ticket.period_id : true )
    .filter(ticket => selectedArea ? selectedArea.id === ticket.area_id : true)
    .filter(ticket => selectedDetail ? selectedDetail.id === ticket.detail_id : true)

  const ticketsPerCategory = filteredTickets
    .map(ticket => ticket.category_id)
    .filter((category,index, arr) => arr.indexOf(category) === index)
  const ticketsPerPeriods = filteredTickets
    .map(ticket => ticket.period_id)
    .filter((period,index,arr) => arr.indexOf(period) === index)
  const ticketsPerOptions = filteredTickets
    .map(ticket => ticket.option_id)
    .filter((option,index,arr) => arr.indexOf(option) === index)
  const ticketsPerAreas = filteredTickets
    .map(ticket => ticket.area_id)
    .filter((area,index,arr) => arr.indexOf(area) === index )
  const ticketsPerDetail = filteredTickets
    .map(ticket => ticket.detail_id)
    .filter((detail,index,arr) => arr.indexOf(detail) === index )

  const handleChangeName = e => {
    setName(e.target.value)
  }

  const handleStep = type => {
    if(name.length > 2){
      setError("")
      if(type === "next"){
        if(ticketsPerCategory.length > 1){
          setStep("categories")
          setQuestions(currentQuestions => currentQuestions.concat({id:"categories", question: "are you interested in tickets that include sightseeing or public transportation only?" }))
        }else if(ticketsPerOptions.length > 1){
          setStep("options")
          setQuestions(currentQuestions => currentQuestions.concat({id:"options", question: "are you looking for limited or unlimited access to public transportation?" }))
        }else if(ticketsPerPeriods.length > 1){
          setStep("periods")
          setQuestions(currentQuestions => currentQuestions.concat({id: "periods", question:"for how long will you be visiting Berlin?" }) )
        }else if(ticketsPerAreas.length > 1){
          setStep("areas")
          setQuestions(currentQuestions => currentQuestions.concat({id: "areas", question: "which zones are you planning to visit?"}))
        }else if(ticketsPerDetail.length > 1){
          setStep("details")
          setQuestions(currentQuestions => currentQuestions.concat({id: "details", question: "Great, almost done. We just need some extra information to suggest you the best possible ticket."}))
        }else if(filteredTickets.length === 1){
          setStep("end")
        }
      }else if(type === "back"){
        setStep(questions[questions.length-2].id)
        if(questions[questions.length-1].id === "areas"){
          setSelectedArea(null)
          setQuestions(currentQuestions => currentQuestions.filter(q => q.id !== "areas"))
        }else if(questions[questions.length-1].id === "categories"){
          setSelectedCategory(null)
          setQuestions(currentQuestions => currentQuestions.filter(q => q.id !== "categories"))
        }else if(questions[questions.length-1].id === "periods"){
          setSelectedPeriod(null)
          setQuestions(currentQuestions => currentQuestions.filter(q => q.id !== "periods"))
        }else if(questions[questions.length-1].id === "details"){
          setSelectedDetail(null)
          setQuestions(currentQuestions => currentQuestions.filter(q => q.id !== "details"))
        }else if(questions[questions.length-1].id === "options"){
          setSelectedOption(null)
          setQuestions(currentQuestions => currentQuestions.filter(q => q.id !== "options"))
        }

      }else{
        setStep("name")
        setName("")
        setSelectedCategory(null)
        setSelectedArea(null)
        setSelectedDetail(null)
        setSelectedOption(null)
        setSelectedPeriod(null)
        setQuestions([{id:"name", question: "First, please tell us your name."}])
      }
    }else{
      setError("You should add your name, Please!")
    }
  }

  let body

  switch (step) {
    case "name":
      body = 
        <Card title={questions.find(q => q.id === "name").question}>
          <Input name={name} handleChangeName={handleChangeName} />
        </Card>
      break 
  
    case "categories":
      body=(
        <Card title={`Hello ${name}, ${questions.find(q => q.id === "categories").question }`}>
          <div style={{ display: "flex" }}>
            {Categories
              .map(category => 
                <Card 
                  active={selectedCategory && selectedCategory.id === category.id} 
                  handleClickCard={() => setSelectedCategory(category)} 
                  button={true} 
                  key={category.id} 
                  title={category.name}
                />
              )
            }
          </div>
        </Card>
      )
      break
    case "options":
      body = (
        <Card title={`${name}, ${questions.find(q => q.id === "options").question }` }>
          <div style={{ display: "flex" }}>
            {Options
              .map(option => 
                <Card 
                  active={selectedOption && selectedOption.id === option.id} 
                  handleClickCard={() => setSelectedOption(option)} 
                  button={true}
                  key={option.id} 
                  title={option.name} 
                />
              )
            }
          </div>
        </Card>
      )
      break
    case "periods":
      body = (
        <Card title={`${name}, ${questions.find(q => q.id === "periods").question}`}>
          <div style={{ display: "flex" }}>
            {TimePeriods
              .filter(period => period.categories
              .find(cat => cat === selectedCategory.id))
              .map(period => 
                <Card 
                  active={selectedPeriod && selectedPeriod.id === period.id} 
                  handleClickCard={() => setSelectedPeriod(period)} 
                  button={true} 
                  key={period.id} 
                  title={period.name}
                />
              )
            }
          </div>
        </Card>
      )
      break
    case "areas":
        body = (
          <Card title={`${name}, ${questions.find(q => q.id === "areas").question}`} >
            <div style={{ display: "flex" }}>
              {Areas
                .filter(area => area.categories
                .find(cat => cat === selectedCategory.id))
                .map(area => 
                  <Card 
                    handleClickCard={() => setSelectedArea(area)} 
                    active={selectedArea && selectedArea.id === area.id} 
                    button={true} 
                    key={area.id} 
                    title={area.name}
                  />
                )
              }
            </div>
          </Card>
        )
      break
    case "details":
        body = (
          <Card title={`${questions.find(q => q.id === "details").question}`} >
            <div style={{ display: "flex" }}>
              {Details
                .filter(detail => (detail.periods
                  .find(ped => selectedPeriod && ped === selectedPeriod.id)) || (detail.options.find(opt => selectedOption && opt === selectedOption.id )))
                .map(detail => 
                  <Card 
                    handleClickCard={() => setSelectedDetail(detail)}  
                    active={selectedDetail && selectedDetail.id === detail.id} 
                    button={true} 
                    key={detail.id} 
                    title={detail.name}
                  />
                )
              }
            </div>
          </Card>
        )
      break

    case "end":
      body = (
        <Card title={`${name}, the best ticket for your journey is the ${filteredTickets[0].name} for the price of €${filteredTickets[0].price}`}>
          {filteredTickets[0].reduceFare && <h6>{`If you are between 6-14 years old you might be eligible to the reduced fare: for the price of €${filteredTickets[0].reduceFare}`}</h6>}
          <Card title="This decision is based on the answers you have given. Have fun and enjoy Berlin!">
            <ul>
              {questions.map((q,index) =>
                <div key={index}>
                  <li>{q.question}</li>
                  {q.id === "categories" && <p><strong>{selectedCategory.name}</strong></p>}
                  {q.id === "periods" && <p><strong>{selectedPeriod.name}</strong></p>}
                  {q.id === "areas" && <p><strong>{selectedArea.name}</strong></p>}
                  {q.id === "details" && <p><strong>{selectedDetail.name}</strong></p>}
                  {q.id === "options" && <p><strong>{selectedOption.name}</strong></p>}
                </div>
              )}
            </ul>
          </Card>
          
        </Card>
      )
      break

    default:
      <p>Something wrong happened! Contact us if you see this message</p>
      break;
  }


  return (
    <div className="App">

      <div>
        <h1>BerlinGetAround</h1>
        <h4>Welcome to BerlinGetAorund, this app will help you chose the right ticket for your stay in Berlin.</h4>
      </div>

      {error &&<div style={{color: 'red'}}>
        {error}
      </div>}

      <div className="questionContainer">
        {body}
      </div>

      <div className="buttonContainer">
          {step !== "name" && step !== "end" && <Button type="danger" handleClick={() => handleStep("back")}>Back</Button>}
          {step !== "end" && <Button type="ok" handleClick={() => handleStep("next")}>Next</Button>}
          {step === "end" && <Button type="ok" handleClick={() => handleStep()}>Try Again!</Button>}
      </div>
    </div>
  );
}

export default App;
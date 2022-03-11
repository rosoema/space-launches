import {Routes, Route, Link, useLocation, HashRouter as Router} from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Text from "./components/Text";
import MainLink  from "./components/Main_Link";
import SmallLink from "./components/Small_Link";
import Wrapper from "./components/Wrapper";
import Button from "./components/Button";
import { ThemeProvider } from "styled-components";

class Space extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    fetch("https://ll.thespacedevs.com/2.2.0/launch/")
      .then(data => data.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      })
  }

  render() {

    let { isLoaded, items } = this.state;

    if(!isLoaded){
      return <div><Text>Loading ...</Text></div>
    } else {
      
      return (
        <div>
          <ul>
            {items.results.map(item => (
              <Link 
                style={{textDecoration: "none"}} 
                to="/launch" 
                state={
                  { 
                    title: item.name, 
                    desc: item.mission.description, 
                    link: item.pad.map_url, 
                    status: item.status.description, 
                    type: item.mission.type, 
                    loc: item.pad.location.name
                  }
                }>
                  <MainLink>{item.name}</MainLink>
              </Link>              
            ))}
          </ul>
        </div>
      )
    }
  }
}

const theme = {
  font: "Tahoma"
}

export default function App() {
  return (
  <div>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/launch" element={<Launch/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  </div>
)
}

const Home = () => (
  <div>
    <Header primary>Go beyond</Header>
    <Text main>Explore some of the space launches.</Text>
    <Space />
  </div>
)

function Launch() {
  const location = useLocation();
  const { title, desc, link, status, type, loc } = location.state;

  return(
    <div>
      <Link to="/"><Button type="button">Back</Button></Link>
      <Header>{title}</Header>
      <Wrapper>
        <Text>{desc}<br/>
        <br/>Status: {status}<br/>
        <br/>Mission type: {type}<br/>
        <br/>Location of the launch: {loc}</Text>
        { link === "null" ? null : <SmallLink href={link} target="_blank" rel="noreferrer">See location on the map</SmallLink>}
      </Wrapper>
    </div>
  )
}

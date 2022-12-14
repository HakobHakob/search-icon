import JSONDATA from "./JSON/MOCK_DATA.json"
import * as Styled from "./Search/Styled"
import React, { useState, useEffect } from "react"

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [data, setData] = useState(JSONDATA)
  useEffect(() => {
    const changeTerm = setTimeout(() => {
      if(searchTerm.length === 0){
        setData(JSONDATA) 
      }
      if (searchTerm.length >= 1) {
        const result = JSONDATA.filter((iconData) => {
          return iconData.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        setData(result)
      }
    }, 500)

    return () => {
      clearTimeout(changeTerm)
    }
  }, [searchTerm])

  return (
    <Styled.Main>
      <Styled.Tools>
        <Styled.Input
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
      </Styled.Tools>

      <Styled.ListDiv>
        {data.map((termData, i) => {
          return (
            <Styled.List key={i}>
              {termData.name}
              -
              <img src={termData.src} width="20px" height="20px" alt="" />,
            </Styled.List>
          )
        })}
      </Styled.ListDiv>
    </Styled.Main>
  )
}

export default App

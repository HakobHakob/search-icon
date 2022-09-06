import JSONDATA from "./JSON/MOCK_DATA.json"
import * as Styled from "./Search/Styled"
import React, { useState } from "react"

function App() {
  const [searchTerm, setSearchTerm] = useState("")

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
        {JSONDATA.filter((term) => {
          if (searchTerm === "") {
            return term
          }
          if (
            term.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return term
          }
        }).map((termData, i) => {
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

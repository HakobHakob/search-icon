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
        {JSONDATA.filter((data) => {
          if (searchTerm === "") {
            return data
          }
          if (
            data.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data
          }
        }).map((data, key) => {
          return (
            <Styled.List key={key}>
              {data.first_name}
              -
              <img src={data.src} width="20px" height="20px" alt="" />,
            </Styled.List>
          )
        })}
      </Styled.ListDiv>
    </Styled.Main>
  )
}

export default App

import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import {Progress} from "@nextui-org/react";

const Container = styled.div`${tw`text-xl text-white`}`
const Button = styled.button`
&:hover{
    transform: scale(1.1); 
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    opacity: 0.5;
}`

const Menus = ({Text}) => {
    const [hoverValue, setHoverValue] = useState(0)

  return (
    <Container>
        <Button 
            onMouseEnter={() => setHoverValue(100)} 
            onMouseLeave={() => setHoverValue(0)}
        >
            {Text}
        </Button>
        {hoverValue === 0
            ? ''
            : <Progress 
                size="sm" 
                color="success" 
                aria-label="Loading..." 
                value={hoverValue} 
                className="mt-2 max-w-md"
              />
        }
    </Container>
  )
}

export default Menus
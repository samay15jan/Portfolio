import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Icon from './Icon'

const Heading = styled.h2`${tw`text-2xl text-center flex justify-center mb-5`}`
const FlexContainer = styled.div`${tw`flex justify-center`}`

const IconContainer = ({ startingText, endingText, type }) => {
    return (
        <div>
            <Heading>{startingText} <div className='text-[#23C562] ml-2'>{endingText}</div></Heading>
            <FlexContainer>
                {Object.values(type).map((skill, index) => (
                    <a key={index} href={skill.src} target="_blank" rel="noopener noreferrer">
                        <Icon Type={skill.icon}/>
                    </a>
                ))}
            </FlexContainer>
        </div>
    )
}

export default IconContainer
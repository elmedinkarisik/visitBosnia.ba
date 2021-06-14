import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { BiBasketball } from "react-icons/bi"
import { BiTennisBall } from "react-icons/bi"
import { graphql, useStaticQuery } from "gatsby"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["novakdjokovic", "michaeljordan"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <TestimonialsContainer>
      <TopLine>Reviews</TopLine>
      <Description>
        You might recognize some of our satisfied clients
      </Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <BiBasketball
              css={`
                color: orange;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Michael Jordan</h3>
            <p>
              "I was amazed and stunned by the beautiful nature that Bosnia and
              Herzegovina has to offer. I've traveled quite a lot in my life and
              I have seen and experienced a lot of things, but this really was
              something I've never felt nor seen before. Who would've known that
              such a small country hides so many treasures within it."
            </p>
          </Testimonial>
          <Testimonial>
            <BiTennisBall
              css={`
                color: green;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Novak Đoković</h3>
            <p>
              "I'm under so many impressions... If there is a Heaven on Earth,
              it is here."
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image, key) => (
            <Images key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1900px) / 2);
  height: 100%;
`
const TopLine = styled.p`
  // color: #077bf1;
  // font-size: 1rem;
  // padding-left: 2rem;
  // margin-bottom: 0.75rem;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-style: italic;
  }

  p {
    font-size: 1.5rem;
    color: #3b3b3b;
  }
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
`

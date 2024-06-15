import styled from 'styled-components';
import './Style.css'
import { AiOutlineArrowRight } from "react-icons/ai";

const Box = styled.a`
  min-height:4vh;
  width: 80%;
  max-width: 400px;
  padding: 10px;
  border-bottom: solid 0.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
`;

const Arrow = styled.a`
  width: 10%;
  height: 100%;
  text-align: left;
  display: flex;
  justify-content: center;
`;
const Title = styled.div`
  width: 90%;
  font-weight: 900;
  font-family: "Inter", sans-serif, "IBM Plex Mono", monospace;
  font-size: 3.2vh;
  color: #8d0000;
`;
const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const Sottotitolo = styled.div`
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  width: 100%;
  font-size: 1.8vh;
`;
const Container = styled.div`
  width: 100%;
  margin-top: 15px;
  line-height:1.2vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  font-size: 1.5vh;
  padding-bottom: 5px;
  font-family: "IBM Plex Mono", monospace;
`;
const ContainerSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 1.5vh;
  font-family: "IBM Plex Mono", monospace;
`;
const ContainerItem = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  border-radius: 10px;
  background-color: ${props => props.color};
  color: ${props => props.textColor};
`;

const Item = (props) => {
  return <Box href={props.link}>
    <TitleContainer>
      <Title>{props.title}</Title>
      <Arrow>
        <AiOutlineArrowRight />
      </Arrow>
    </TitleContainer>
    <Sottotitolo>{props.sottotitolo}</Sottotitolo>
    <Container>
      <ContainerSection>
        { props.ingresso && <ContainerItem color='#003f5c' textColor="white">Ingresso</ContainerItem>}
        { props.pace && <ContainerItem color='#58508d' textColor="white">Pace</ContainerItem>}
        { props.pane && <ContainerItem color='#8a508f' textColor="white">Pane</ContainerItem>}
        { props.vino && <ContainerItem color='#bc5090' textColor="white">Vino</ContainerItem>}
        { props.finale && <ContainerItem color='#ffd380' textColor="black">Finale</ContainerItem>}
      </ContainerSection>
      <ContainerSection>
        { props.aMaria && <ContainerItem color='#de5a79' textColor="white">A Maria</ContainerItem>}
        { props.natale && <ContainerItem color='#ff6361' textColor="white">Natale</ContainerItem>}
        { props.quaresima && <ContainerItem color='#ff8531' textColor="black">Quaresima</ContainerItem>}
        { props.pentecoste && <ContainerItem color='#ffa600' textColor="black">Pentecoste</ContainerItem>}
      </ContainerSection>
    </Container>
  </Box>
}

export { Item };

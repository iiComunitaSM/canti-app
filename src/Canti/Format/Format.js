import styled from 'styled-components';
import './Style.css'
import { AiOutlineArrowRight } from "react-icons/ai";

const Box = styled.a`
  min-height:4vh;
  width: 80%;
  max-width: 400px;
  padding: 1%;
  border-bottom: solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
`;
const Detail = styled.a`
  width: 80%;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Arrow = styled.a`
  width: 20%;
  height: 100%;
  text-align: left;
  display: flex;
  justify-content: center;
`;
const Title = styled.div`
  font-weight: 600;
  font-family: "IBM Plex Mono", monospace;
  font-size: 2.5vh;
`;
const Sottotitolo = styled.div`
  font-weight: 300;
  ont-family: "Roboto", sans-serif;
  font-size: 1.8vh;
`;
const Container = styled.div`
  width: 100%;
  margin-top: 1vh;
  line-height:1.2vh;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 1.5vh;
  padding: 10px 0;
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
`;

const Item = (props) => {
  return <Box href={props.link}>
    <Detail>
      <Title>{props.title}</Title>
      <Sottotitolo>{props.sottotitolo}</Sottotitolo>
      <Container>
        { props.ingresso && <ContainerItem color='#FCAE7C'>Ingresso</ContainerItem>}
        { props.pace && <ContainerItem color='#FFE699'>Pace</ContainerItem>}
        { props.pane && <ContainerItem color='#F9FFB5'>Pane</ContainerItem>}
        { props.vino && <ContainerItem color='#B3F5BC'>Vino</ContainerItem>}
        { props.aMaria && <ContainerItem color='#D6F6FF'>A Maria</ContainerItem>}
        { props.natale && <ContainerItem color='#E2CBF7'>Natale</ContainerItem>}
        { props.quaresima && <ContainerItem color='#D1BDFF'>Quaresima</ContainerItem>}
        { props.pentecoste && <ContainerItem color='#FA9189'>Pentecoste</ContainerItem>}
      </Container>
    </Detail>
    <Arrow>
      <AiOutlineArrowRight />
    </Arrow>
  </Box>
}
export { Item };

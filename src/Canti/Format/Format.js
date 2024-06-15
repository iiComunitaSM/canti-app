import styled from 'styled-components';
import './Style.css'
import { AiOutlineArrowRight } from "react-icons/ai";

const Box = styled.a`
  min-height:4vh;
  width: 80%;
  max-width: 400px;
  padding: 1%;
  border-bottom: solid 0.5px;
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
  font-weight: 900;
  font-family: "Inter", sans-serif, "IBM Plex Mono", monospace;
  font-size: 3.2vh;
  color: #8d0000;
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
  color: ${props => props.textColor};
`;

const Item = (props) => {
  return <Box href={props.link}>
    <Detail>
      <Title>{props.title}</Title>
      <Sottotitolo>{props.sottotitolo}</Sottotitolo>
      <Container>
        { props.ingresso && <ContainerItem color='#003f5c' textColor="white">Ingresso</ContainerItem>}
        { props.pace && <ContainerItem color='#58508d' textColor="white">Pace</ContainerItem>}
        { props.pane && <ContainerItem color='#8a508f' textColor="white">Pane</ContainerItem>}
        { props.vino && <ContainerItem color='#bc5090' textColor="white">Vino</ContainerItem>}
        { props.finale && <ContainerItem color='#ffd380' textColor="black">Finale</ContainerItem>}
        { props.aMaria && <ContainerItem color='#de5a79' textColor="white">A Maria</ContainerItem>}
        { props.natale && <ContainerItem color='#ff6361' textColor="white">Natale</ContainerItem>}
        { props.quaresima && <ContainerItem color='#ff8531' textColor="black">Quaresima</ContainerItem>}
        { props.pentecoste && <ContainerItem color='#ffa600' textColor="black">Pentecoste</ContainerItem>}
      </Container>
    </Detail>
    <Arrow>
      <AiOutlineArrowRight />
    </Arrow>
  </Box>
}
export { Item };

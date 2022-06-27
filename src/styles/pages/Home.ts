import styled from "styled-components";

export const Container = styled.div`
width: 100%;
min-height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-wrap: wrap;

.repos{
  background-color: white;
  padding: 10px;
  border: 5px solid lightgray;
  width: 90%;
  margin-top: 20px;
}
h1{
    color: ${props => props.theme.colors.primary};
    transition: color,font-size  2s;
    font-size: 25px;
    margin-top: 10px;
}
p{
  margin-top:20px;
  font-size:16px;
  line-height: 32px;
  color: #181717;
}
`;
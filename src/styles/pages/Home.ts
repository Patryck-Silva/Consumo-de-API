import styled from "styled-components";
import tw from "tailwind-styled-components";

export const Container = styled.div`
width: 100%;
min-height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-wrap: wrap;


h1{
    color: ${props => props.theme.colors.primary};
    transition: color,font-size  2s;
    font-size: 80px;
    margin-bottom: 50px;
}
.form{
  display: flex;
  flex-direction:column;
  justify-content: space-around;
}
div{
  display: flex;
  flex-direction: column;
}
.input {
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  color: #f5f5f5;
  transition: border 150ms cubic-bezier(0.4,0,0.2,1);
}
.user-label {
  left: 15px;
  color: #e8e8e8;
  pointer-events: none;
  margin-bottom: 10px;
}


button{
  margin-top: 25px;
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  border: 2px solid #181717;
}
button:hover {
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0px 5px 20px ${props => props.theme.colors.primary};
  color: #fff;
  transform: translateY(-7px);
}
`;


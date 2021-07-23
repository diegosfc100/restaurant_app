import styled from 'styled-components';

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh; 
  overflow-y: auto; 
`;
/*A medida vh é igual a 1/100 da altura da viewport. Então, por exemplo, se a altura do navegador é 900px, 1vh equivale a 9px e, analogamente, se a largura da viewport é 750px, 1vw equivale a 7.5px.*/
/*O conteúdo é acessível através de barras de rolagem que são exibidas mesmo que o conteúdo não precise. Isso evita o problema de barras de rolagem aparecendo e desaparecendo quando o conteúdo é dinâmico. */

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 16px;
`;

export const Logo = styled.img`
    margin-bottom: 15px;
`;
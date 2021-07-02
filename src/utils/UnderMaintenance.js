import maintenance1 from '../img/maintenance1.png';
import styled from "styled-components";


function UnderMaintenance() {
  return (
    <MaintenanceContainer className="maintenance-container">
        <img src={maintenance1} alt="under maintenance" />
        <div>
          <p>  
            Uh-oh! 
            <br/>
            This section is still under maintenance. 
            <br/>
          </p>
        </div>
    </MaintenanceContainer>
  )
}

const MaintenanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  /* justify-content: center; */

  img {
    align-self:center;
    max-width: 20rem;
    max-height: auto;
  }
  div {
    display: inline-block;
  }

  div p {
    margin:auto;
    align-self:center;
    width: 40vw;
  }
   

  p {
    /* display and box model */
    padding: 1.5rem 0rem;
    max-width: 25vw;


    /* text */
    font-size: 1.2rem;
    font-weight: light;
    text-align: center;
    color: rgba(244, 244, 244, 0.75);
  }
`;

export default UnderMaintenance;
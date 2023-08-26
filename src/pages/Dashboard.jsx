import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import NewHeader from "../components/newHeader";
import PersonList from "../components/PersonList";

const Dashboard = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "육기준",
      role: "Captain"
    },
    {
      id: 2,
      name: "육기준",
      role: "Captain"
    },
    {
      id: 3,
      name: "육기준",
      role: "Captain"
    },
  ]);

  return <>
    <Wrapper>
      <NewHeader />
      <Container>
        <div>
          <ShipInfo>
          <Title>
            <img src="/imgs/Info.svg" alt="" />
            선박 정보
          </Title>
          <img src="/imgs/Graph.svg" alt="" />
          <div><h1>Departure</h1><h1>Arrival</h1></div>
        </ShipInfo>
        <Weather>
          <div>
            <Title>
              <img src="/imgs/Info.svg" alt="" />
              기상 정보
            </Title>
            <div>
              <h3>Data by WeatherNews</h3>
            </div>
          </div>
          <div>
            <WeatherDetail>
              <div>
                <img src="/imgs/Cloud.svg" alt="" />
                <h1>20℃</h1>
              </div>
              <MinMax>
                <h1><span>↑</span>25℃</h1>
                <h1><span>↓</span>15℃</h1>
              </MinMax>
            </WeatherDetail>
            <div>
              <div>
                <h1>미세먼지 <span>좋음</span></h1>
                <h1>물살 <span>빠름</span></h1>
              </div>
              <div>
                <h1>초미세먼지 <span>좋음</span></h1>
                <h1>수온 <span>10℃</span></h1>
              </div>
            </div>
          </div>
          <WeatBar>
            <div>
              <h5>08:00</h5>
              <img src="/imgs/Cloud.svg" alt="" />
              <h4>20℃</h4>
            </div>
            <div>
              <h5>10:00</h5>
              <img src="/imgs/Sun.svg" alt="" width="40" height="40"/>
              <h4>21℃</h4>
            </div>
            <div>
              <h5>12:00</h5>
              <img src="/imgs/Sun.svg" alt="" width="40" height="40"/>
              <h4>23℃</h4>
            </div>
            <div>
              <h5>14:00</h5>
              <img src="/imgs/Sun.svg" alt="" width="40" height="40"/>
              <h4>24℃</h4>
            </div>
            <div>
              <h5>16:00</h5>
              <img src="/imgs/Cloud.svg" alt="" />
              <h4>23℃</h4>
            </div>
            <div>
              <h5>18:00</h5>
              <img src="/imgs/Cloud.svg" alt="" />
              <h4>20℃</h4>
            </div>
            <div>
              <h5>20:00</h5>
              <img src="/imgs/Cloud.svg" alt="" />
              <h4>21℃</h4>
            </div>
            <div>
              <h5>22:00</h5>
              <img src="/imgs/Cloud.svg" alt="" />
              <h4>20℃</h4>
            </div>
            <div>
              <h5>24:00</h5>
              <img src="/imgs/Cloud.svg" alt="" />
              <h4>19℃</h4>
            </div>
          </WeatBar>
        </Weather>
        </div>
        <div>
        <People>
          <Title>
            <img src="/imgs/Person.svg" alt="" />
            승무원 정보
          </Title>
          <div>
            { 
            users.map(user => <PersonList key={user.id} Text={user.name} Role={user.role} />)
            }
          </div>
        </People>
        <Fan>
          <Title>
            <img src="/imgs/Info.svg" alt="" />
            내부 정보
          </Title>
          <Fans>
            <MainFan RPM={100}>
              <h1>M/E</h1>
              <img src="/imgs/MEfan.svg" alt="" />
              <div>
                <div><h1>RPM</h1> <h2>60%</h2></div>
                <div><h1>LOAD</h1> <h2>70%</h2></div>
              </div>
            </MainFan>
              <Line />
            <SubFan>
              <h1>G/E</h1>
              <SF RPM={100}>
                <div>
                  <img src="/imgs/GEfan.svg" alt="" />
                  <h1>ENGINE-1</h1>
                </div>
                <div>
                  <div><h1>RPM</h1> <h2>60%</h2></div>
                  <div><h1>LOAD</h1> <h2>70%</h2></div>
                </div>
              </SF>
              <SF RPM={100}>
                <div>
                  <img src="/imgs/GEfan.svg" alt="" />
                  <h1>ENGINE-2</h1>
                </div>
                <div>
                  <div><h1>RPM</h1> <h2>60%</h2></div>
                  <div><h1>LOAD</h1> <h2>70%</h2></div>
                </div>
              </SF>
              <SF RPM={100}>
                <div>
                  <img src="/imgs/GEfan.svg" alt="" />
                  <h1>ENGINE-3</h1>
                </div>
                <div>
                  <div><h1>RPM</h1> <h2>60%</h2></div>
                  <div><h1>LOAD</h1> <h2>70%</h2></div>
                </div>
              </SF>
            </SubFan>
              <Line />
            <Fuel>
              <h1>Fuel</h1>
              <img src="/imgs/Fuel.svg" />
              <FuelBox>
                <div>
                  <h1>Litter</h1>
                  <h2>150L</h2>
                </div>
                <div>
                  <h1>Remain</h1>
                  <h2>50%</h2>
                </div>
              </FuelBox>
            </Fuel>
          </Fans>
        </Fan>
        </div>
      </Container>
    </Wrapper>
  </>
};

export default Dashboard;

const WeatherDetail = styled.div`
  display: flex;
  gap: 10px;
  & h1 {
    margin: 0;
  }
`

const Rotating = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const MinMax = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & > h1 {
    margin: 0;
    font-size: 20px;
  }
  & > h1:nth-child(1) span {
    color: red;
  }
  & > h1:nth-child(2) span {
    color: blue;
  }
`

const Weather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 706px;
  height: 321px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 2px solid #1E6BC5;
  background: #FFF;
  box-sizing: border-box;
  padding: 15px;
  gap: 15px;
  font-weight: 500px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
  & > div:nth-child(2) {
    margin-top: 20px;
    display: flex;
    gap: 20px;
    & > div:nth-child(2) {
      display: flex;
      gap: 10px;
      & h1 {
        font-size: 15px;
      }
      & h1:nth-child(1) span {
        color: blue;
      }
      & h1:nth-child(2) span {
        color: red;
      }
    }
  }
  & > div:nth-child(1) {
      display: flex;
      justify-content: space-between;
      width: 100%;
      & h3 {
        font-size: 15px;
        margin: 0;
      }
  }
  & > img {
    width: 80px;
    height: 75px;
  }
  & > h1 {
    margin: 0;
  }
`

const WeatBar = styled.div`
  display: flex;
  width: 519.469px;
  height: 86.486px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.40);
  background: #FFF;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding-left: 10px;
  justify-content: center;
  padding-right: 10px;
  gap: 5px;
  & > div {
    & h1, h2, h3, h4, h5, h6 {
      margin: 0;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.91) 64.06%, rgba(227, 243, 255, 0.88) 100%);
  display: flex;
  overflow: auto;
`

const Container = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  & > div {
    display: flex;
    gap: 10px;
  }
`

const ShipInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 706px;
  height: 321px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 2px solid #1E6BC5;
  background: #FFF;
  box-sizing: border-box;
  padding: 15px;
  gap: 15px;
  font-weight: 500px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
  & > div:nth-last-child(1) {
    & > h1 {
      font-size: 25px;
    }
    display: flex;
    justify-content: space-between;
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  font-weight: 500px;
`

const People = styled.div`
  display: flex;
  flex-direction: column;
  width: 434px;
  height: 500px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 2px solid #1E6BC5;
  background: #FFF;
  box-sizing: border-box;
  padding: 15px;
  gap: 20px;
  overflow: auto;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`

const Fan = styled.div`
  display: flex;
  flex-direction: column;
  width: 977px;
  height: 500px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 2px solid #1E6BC5;
  background: #FFF;
  box-sizing: border-box;
  padding: 15px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
`

const Line = styled.div`
  width: 1px;
  height: 420.004px;
  background: rgba(0, 0, 0, 0.40);
`

const MainFan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  margin: 0;
  width: 20%;
  height: 100%;
  & > h1 {
    margin: 0;
  }
  & > img {
    animation: ${Rotating} ${props => 50/props.RPM}s linear infinite;
    transform-origin: 50% 50%;
  }
  & > div {
    width: 189px;
    height: 62px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid rgba(7, 6, 6, 0.4);
    background: #FFF;
    box-sizing: border-box;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3px;
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      & > h1, h2 {
        margin: 0;
      }
      & > h1 {
        font-size: 20px;
      }
      & > h2 {
        font-size: 15px;
      }
    }
  }
`

const SubFan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  & h1 {
    margin: 0;
  }
`

const Fuel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  height: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  & > h1 {
    margin: 0;
  }
  & > img {
    margin-right: -21px;
  }
`

const Fans = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`

const SF = styled.div`
  display: flex;
  gap: 30px;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    & > img {
      width: 70px;
      height: 70px;
      animation: ${Rotating} ${props => 50/props.RPM}s linear infinite;
    }
    & > h1 {
      font-size: 20px;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 239px;
    height: 78px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.40);
    background: #FFF;
    & > div {
        & > h1, h2 {
          margin: 0;
        }
        & > h1 {
          font-size: 20px;
        }
        & > h2 {
          font-size: 15px;
        }
        box-sizing: border-box;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }
  }
`

const FuelBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.40);
  background: #FFF;
  gap: 20px;
  & h1, h2 {
    margin: 0;
  }
  & h1 {
    font-size: 20px;
  }
  & h2 {
    font-size: 15px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
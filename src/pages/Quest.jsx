import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Map from "../components/realMap";
import { shipLocation } from "../apis/shipLocation";
import NewHeader from "../components/newHeader";

function Quest() {
  const [arrow, setArrow] = useState(false);

  const [location, setLocation] = useState(null);

  useEffect(() => {
    shipLocation()
      .then((res) => {
        setLocation(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Error");
      });
    setInterval(() => {
      shipLocation()
        .then((res) => {
          setLocation(res.data);
        })
        .catch((err) => {
          console.error(err);
          alert("Error");
        });
    }, 60000);
    return () => {
      clearInterval();
    };
  }, []);

  return (
    <>
      <NewHeader />
      <Body>
        <Location>
          {location && (
            <TextBox>
              <Text>위도 : {location.latitude} </Text>
              <Text>경도 : {location.longitude} </Text>
            </TextBox>
          )}
        </Location>
        <Map />
      </Body>
    </>
  );
}

export default Quest;

const Body = styled.div``;

const Location = styled.div`
  position: fixed;
  width: 350px;
  height: 50px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 2;
  right: 15px;
  top: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
`;

const Btn = styled.div`
  width: 30px;
  height: 180px;
  border-right: 1px solid darkgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  transform: ${({ arrow }) => !arrow && `rotate(180deg)`};
  -webkit-user-drag: none;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 30px;
  height: 50px;
`;

const Text = styled.div`
  font-size: 16px;
`;

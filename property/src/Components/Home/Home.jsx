import React from "react";
import "./Home.css";
import Card from "../Card/Card";
import house from "../../assets/house.jpg";
import house1 from "../../assets/housekichen.jpg";
import house2 from "../../assets/houseliving.jpg";

import farmhouse from "../../assets/farmhouse2.jpg";
import farmhouse1 from "../../assets/farmhouse1.jpg";
import farmhouse2 from "../../assets/farmhouse.jpg";

import poolhouse from "../../assets/air1.avif";
import poolhouse1 from "../../assets/air2.avif";
import poolhouse2 from "../../assets/air3.avif";

import mountain from "../../assets/mountain1.avif";
import mountain1 from "../../assets/mountain2.avif";
import mountain2 from "../../assets/mountain3.avif"

import village from "../../assets/village1.avif";
import village1 from "../../assets/village2.avif";
import village2 from "../../assets/village3.avif";

import huthouse from "../../assets/huthouse.jpg";
import huthouse1 from "../../assets/huthouse1.jpg";
import huthouse2 from "../../assets/huthouse2.jpg";

import flate from "../../assets/room.jpg";
import flate1 from "../../assets/room1.jpg";
import flate2 from "../../assets/room2.jpg";

import old  from "../../assets/old.avif";
import old1 from "../../assets/old.avif";
import old2 from "../../assets/old.avif";



const Home = () => {
  return (
    <div id="home">
      <Card image1={house} image2={house1} image3={house2} title={"2BHK villa in Gwalior"} price={"40,000"} />

      <Card image1={farmhouse} image2={farmhouse1} image3={farmhouse2} title={"1BHK FarmHouse in Dabra"} price={"20,000"} />

      <Card image1={poolhouse} image2={poolhouse1} image3={poolhouse2} title={"1BHK FarmHouse in Datiya"} price={"40,000"} />

      <Card image1={mountain} image2={mountain1} image3={mountain2} title={"4BHK Flate in Manali"} price={"50,000"} />

      <Card image1={village} image2={village1} image3={village2} title={"4BHK Flate in kajiranga"} price={"30,000"} />

      <Card image1={huthouse} image2={huthouse1} image3={huthouse2} title={"1BHK Rooms in shivpuri"} price={"20,000"} />

      <Card image1={flate} image2={flate1} image3={flate2} title={"1BHK Flate in jhansi"} price={"15,000"} />

      <Card image1={old} image2={old1} image3={old2} title={"old farm house"} price={"5,000"} />


    </div>
  );
};

export default Home;

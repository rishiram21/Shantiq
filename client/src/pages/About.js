import React from "react";
import Layout from "./../components/Layout/Layout";
import video from "../assets/about.mp4";
import rishi from "../assets/rishi.jpeg"

const About = () => {
  return (
    <Layout title={"About us - Shop Antique"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <video src={video} autoPlay loop muted height={"450vh"} width={"700vh"} />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          An antique shop (or antiques shop) is a retail store specializing in the selling of antiques. Antiques shops can be located either locally or, with the advent of the Internet, found online.
          Antique shop "Vaarin varasto" in Tammela, Tampere, Finland.
          An antiques shop can also be located within an antique mall, where an individual antique seller can open a booth or stall and display their personal or family items for sale within the mall.These mini-malls are a form of consignment shop, and are often located inside where previous large retailers such as grocery stores have moved out or closed outright.
          </p>
          <b><i>But There is no need to go offline we bring it online through shantiq - shop antique</i></b>
        </div>
        <div style={{textAlign:"right"}}>
          <b>Created by Rishi Ram</b><br></br>
          <img src={rishi} height="100vh" ></img>
        </div>
      </div>
    </Layout>
  );
};

export default About;

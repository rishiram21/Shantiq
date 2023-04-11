import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('SamplePDF.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Agreement.pdf';
            alink.click();
        })
    })
}
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="row">
          <img
            src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/PII_Hero_Image.width-1000.format-webp.webp"
            alt="contactus"
            style={{ width: "100%",height:"50vh",backgroundColor:"white",alignContent:"center" }}
          />
          <br></br>
          <h2 style={{textAlign:"center"}}>TO DOWNLOAD USER AGGREMENT CLICK BELOW</h2>
          <button onClick={onButtonClick} style={{backgroundColor:"green"}}>
            Agreement.pdf
          </button>
        </div>
        <div className="col">
        <b>Services Agreement</b><br></br>
          <p style={{color:"red",fontWeight:"bolder"}}>
A Service Agreement is a contract that governs the provision of services in lieu of payment or other consideration. It can be used by any person or organisation which provides services. Some examples include people or entities engaged in the business of building and construction, and electrical work as well as coaching, personal training, consulting, and professional services.
        </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title='Privacy Policy'>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Here are some things to keep in mind when identifying counterfeit watches</p>
          <p>Price: If the price seems too good to be true, it probably isn't authentic. Counterfeiters will often sell their watches at much lower price than the authentic watches, which is a clear indication that something is amiss.</p>
          <p>Quality: Titan watches are built to last, so if the quality of the watch seems poor or feels cheap, it's likely a counterfeit.</p>
          <p>Warranty: All Titan watches come with a warranty. If the seller cannot provide a warranty or offers a warranty that seems questionable, it's likely that the product is counterfeit.</p>
          <p>Packaging: Check the packaging carefully. Often counterfeit watches will come in packaging that looks similar to the real thing but with small differences, such as the font or the logo.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
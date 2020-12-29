import React from "react";
import coverImage from "../../assets/photos/IMG_5703.JPG"

function Jumbo() {
     return (
        <section className="Jumbotron">
    <img src={coverImage} style={{ width: "100%", position: "centered" }} alt="cover"
    />
</section>
     );
  }
  
  export default Jumbo;
import React, { useContext, useEffect} from "react";
import "../Main/MainIn.css";
import "bootstrap/dist/css/bootstrap.css";

// react icon
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";
import { StoreContext } from "../../context/StoreContect";

export default function MainIn(props) {
  const { add, cartItem } = useContext(StoreContext);

  // Lets create a react hook to add a scroll animation...
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="secTitle" id="mainIn">
        <h3 data-aos="fade-right" className="title">
          Most Visited Destination
        </h3>
      </div>
      {/* 1  */}
      <div className="first">
        <div className="row">
          {props.item.map((e) => {
            return (
              <div className="col-md-3">
                <div data-aos="fade-up" class="card" style={{ width: "18rem" }}>
                  <img src={e.Image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{e.place}</h5>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className="icon" />
                      {e.country}
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>
                          CULTURAL RELAX<small>+1</small>
                        </span>
                      </div>
                      <div className="price">
                        <h5>{e.price}</h5>
                      </div>
                    </div>
                    <p class="card-text">{e.content}</p>
                    {/* {cartItem[id]} */}
                    <button className="btn-1" onClick={() => add(e._id)}>
                      BOOK NOW <HiOutlineClipboardCheck className="icon" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

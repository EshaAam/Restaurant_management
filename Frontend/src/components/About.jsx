import React from "react";
import { Link } from "react-router-dom";
import { data } from "../restApi.json";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading"> About Us</h1>
                        <p>Comitted to serve better quality foods!</p>
                    </div>
                    <p className="mid">FoodCart is a popular restaurant in Dhaka where you can enjoy delicious and quality foods at a reasonable price.</p>

                    <Link to={"/"}>Explore Menu {" "}
                        <span>
                            <HiOutlineArrowNarrowRight />
                        </span>
                    </Link>
                </div>

                <div className="banner">
                    <img src="./about.png" alt="about" />
                </div>
            </div>

        </section>

    );
};
export default About;
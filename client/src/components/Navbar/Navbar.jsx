import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { SearchIcon } from "@chakra-ui/icons";
import { BsBag } from "react-icons/bs";
import "./navbar.css";
import NavTop from "./NavTop";
import Slider from "./Slider";
function Navbar() {
  return (
    <>
      <Box className="NavTop"><NavTop /></Box>
      <Box className="navbar1">
        <Box>
          <Image
            width={"90px"}
            ml="10"
            marginTop={"2"}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png"
            alt="nike logo"
          />
        </Box>
        <Box
          className="hidebox showbox"
        >
          <div className="navbar">
            <div className="dropdown">
              <Text className="drop" fontSize={"20px"}>
                Men
              </Text>
              <div className="dropdown-content">
                <div className="header"></div>
                <div className="row">
                  <div className="column">
                    <h3
                      style={{
                        fontSize: "20px",
                        fontFamily: "sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      New Featured
                    </h3>
                    <a href="#"></a>
                    <a href="#">New Releases</a>
                    <a href="#">SNKRS kaunch Calender</a>
                    <a href="#">Member Accesses</a>
                    <a href="#">Air force 1</a>
                    <a href="#">Couple Wear</a>
                    <a href="#">Basaic Essentials</a>
                    <a href="#">Footable Cabe Kits</a>
                    <a href="#">Sustainable Matrials</a>
                    <a href="#">Top picks under 7500.00 sale</a>
                  </div>
                  <div className="column">
                    <h3
                      style={{
                        fontSize: "20px",
                        fontFamily: "sans-serif",
                        fontWeight: "500",
                        marginLeft: "15px",
                      }}
                    >
                      Shope
                    </h3>
                    <a href="#"></a>
                    <a href="#">Newest Sbeaker</a>
                    <a href="#">All Shoes</a>
                    <a href="#">Lifestyle</a>
                    <a href="#">Running</a>
                    <a href="#">Basket ball</a>
                    <a href="#">Jordon</a>
                    <a href="#">Football</a>
                    <a href="#">Gym and training</a>
                    <a href="#">SkateBording</a>
                    <a href="#">Thennise</a>
                    <a href="#">Sandle and sliders</a>
                    <a href="#">coutomise with NIKE</a>
                    <a href="#">By you</a>
                    <a href="#">All sale Shoes</a>
                  </div>
                  <div className="column">
                    <h3
                      style={{
                        fontSize: "20px",
                        fontFamily: "sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      Clothing
                    </h3>
                    <a href="#"></a>
                    <a href="#">All Cplthing</a>
                    <a href="#">Tops and T-Shirt</a>
                    <a href="#">Jersery and kits</a>
                    <a href="#">Hoodies and Sweattshirt</a>
                    <a href="#">Jackets Gilets</a>
                    <a href="#">Tracksuite</a>
                    <a href="#">Compression and base Layer</a>
                    <a href="#">Shorts</a>
                    <a href="#">Caps</a>
                    <a href="#">Shocks</a>
                    <a href="#">Bag and Backpacks</a>
                    <a href="#">Accessories and Equipment</a>
                    <a href="#">All Sale clothing</a>
                  </div>
                  <div className="column">
                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Shop By Sports</h3>
                    <a href="#"></a>
                    <a href="#">Runnig</a>
                    <a href="#">Football</a>
                    <a href="#">Basketball</a>
                    <a href="#">Gym And Training</a>
                    <a href="#">Yoga</a>
                    <a href="#">Skateboarding</a>
                    <a href="#">Tennis</a>
                    <a href="#">Golf</a>

                    <a href="#"></a>
                    <a href="#"></a>

                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Shop By Brand</h3>
                    <a href="#"></a>
                    <a href="#">Nike SportWere</a>
                    <a href="#">NikeLab</a>
                    <a href="#">Nike By You</a>
                    <a href="#">Jorden</a>
                    <a href="#">ACG</a>
                    <a href="#">NBA</a>
                    <a href="#">Nike SB</a>
                  </div>
                  <div className="column">
                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Icons</h3>
                    <a href="#"></a>
                    <a href="#">Air Force 1</a>
                    <a href="#">Pegasus</a>
                    <a href="#">Blazer</a>
                    <a href="#">Air Jorden 1</a>
                    <a href="#">Air Max</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Women */}
          <div className="navbar">
            <div className="dropdown">
              <Text className="drop">Women</Text>
              <div className="dropdown-content">
                <div className="header"></div>
                <div className="row">
                  <div className="column">
                    <h3
                      style={{
                        fontSize: "20px",
                        fontFamily: "sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      New Featured
                    </h3>
                    <a href="#"></a>
                    <a href="#">New Releases</a>
                    <a href="#">SNKRS kaunch Calender</a>
                    <a href="#">Member Accesses</a>
                    <a href="#">Air force 1</a>
                    <a href="#">Couple Wear</a>
                    <a href="#">Basaic Essentials</a>
                    <a href="#">Footable Cabe Kits</a>
                    <a href="#">Sustainable Matrials</a>
                    <a href="#">Top picks under 7500.00 sale</a>
                  </div>
                  <div className="column">
                    <h3
                      style={{
                        fontSize: "20px",
                        fontFamily: "sans-serif",
                        fontWeight: "500",
                        marginLeft: "15px",
                      }}
                    >
                      Shope
                    </h3>
                    <a href="#"></a>
                    <a href="#">Newest Sbeaker</a>
                    <a href="#">All Shoes</a>
                    <a href="#">Lifestyle</a>
                    <a href="#">Running</a>
                    <a href="#">Basket ball</a>
                    <a href="#">Jordon</a>
                    <a href="#">Football</a>
                    <a href="#">Gym and training</a>
                    <a href="#">SkateBording</a>
                    <a href="#">Thennise</a>
                    <a href="#">Sandle and sliders</a>
                    <a href="#">coutomise with NIKE</a>
                    <a href="#">By you</a>
                    <a href="#">All sale Shoes</a>
                  </div>
                  <div className="column">
                    <h3
                      style={{
                        fontSize: "20px",
                        fontFamily: "sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      Clothing
                    </h3>
                    <a href="#"></a>
                    <a href="#">All Cplthing</a>
                    <a href="#">Tops and T-Shirt</a>
                    <a href="#">Jersery and kits</a>
                    <a href="#">Hoodies and Sweattshirt</a>
                    <a href="#">Jackets Gilets</a>
                    <a href="#">Tracksuite</a>
                    <a href="#">Compression and base Layer</a>
                    <a href="#">Shorts</a>
                    <a href="#">Caps</a>
                    <a href="#">Shocks</a>
                    <a href="#">Bag and Backpacks</a>
                    <a href="#">Accessories and Equipment</a>
                    <a href="#">All Sale clothing</a>
                  </div>
                  <div className="column">
                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Shop By Sports</h3>
                    <a href="#"></a>
                    <a href="#">Runnig</a>
                    <a href="#">Football</a>
                    <a href="#">Basketball</a>
                    <a href="#">Gym And Training</a>
                    <a href="#">Yoga</a>
                    <a href="#">Skateboarding</a>
                    <a href="#">Tennis</a>
                    <a href="#">Golf</a>

                    <a href="#"></a>
                    <a href="#"></a>

                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Shop By Brand</h3>
                    <a href="#"></a>
                    <a href="#">Nike SportWere</a>
                    <a href="#">NikeLab</a>
                    <a href="#">Nike By You</a>
                    <a href="#">Jorden</a>
                    <a href="#">ACG</a>
                    <a href="#">NBA</a>
                    <a href="#">Nike SB</a>
                  </div>
                  <div className="column">
                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Icons</h3>
                    <a href="#"></a>
                    <a href="#">Air Force 1</a>
                    <a href="#">Pegasus</a>
                    <a href="#">Blazer</a>
                    <a href="#">Air Jorden 1</a>
                    <a href="#">Air Max</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Kids */}
          <div className="navbar">
            <div className="dropdown">
              <Text className="drop">Kids</Text>
              <div className="dropdown-content">
                <div className="header"></div>
                <div className="row">
                  <div className="column">
                    <h3
                      style={{
                        fontSize: "20px",
                        fontFamily: "sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      New Featured
                    </h3>
                    <a href="#"></a>
                    <a href="#">New Releases</a>
                    <a href="#">Member Accesses</a>
                    <a href="#">Air force 1</a>
                    <a href="#">Bags and Backpacks</a>
                    <a href="#">Jorden</a>
                    <a href="#">Sale</a>
                  </div>
                  <div className="column">
                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Boy's Shoes</h3>
                    <a href="#"></a>
                    <a href="#">
                      Older Kits(3-6.5)
                    </a>
                    <a href="#">
                      Younger Kids(10-12.5)
                    </a>
                    <a href="#">Baby and Toddler(1.5-9.5)</a>
                    <a href="#" >
                      Lifestyles
                    </a>
                    <a href="#" >
                      Running
                    </a>
                    <a href="#" >
                      Basketball
                    </a>
                    <a href="#" >
                      Jorden
                    </a>
                    <a href="#" >
                      Football
                    </a>
                    <a href="#" >
                      Sandals and Slider
                    </a>
                    <a href="#" >
                      All Shoes
                    </a>

                    <a href="#" ></a>
                    <a href="#" ></a>

                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Boy's Clothing</h3>
                    <a href="#" ></a>
                    <a href="#" >Tops And T-shirts</a>
                    <a href="#" >Hoodies and Sweatshirts</a>
                    <a href="#" >Pants and Leggies</a>
                    <a href="#" >Shorts</a>
                    <a href="#" >Boy's All Clothing</a>
                  </div>
                  <div className="column">
                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Girl's Shoes</h3>
                    <a href="#"></a>
                    <a href="#">
                      Older Kits(3-6.5)
                    </a>
                    <a href="#">
                      Younger Kids(10-12.5)
                    </a>
                    <a href="#">Baby and Toddler(1.5-9.5)</a>
                    <a href="#" >
                      Lifestyles
                    </a>
                    <a href="#" >
                      Running
                    </a>
                    <a href="#" >
                      Basketball
                    </a>
                    <a href="#" >
                      Jorden
                    </a>
                    <a href="#" >
                      Football
                    </a>
                    <a href="#" >
                      Sandals and Slider
                    </a>
                    <a href="#" >
                      All Shoes
                    </a>

                    <a href="#" ></a>
                    <a href="#" ></a>

                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Girls' Clothing</h3>
                    <a href="#" ></a>
                    <a href="#" >Tops And T-shirts</a>
                    <a href="#" >Hoodies and Sweatshirts</a>
                    <a href="#" >Pants and Leggies</a>
                    <a href="#" >Shorts</a>
                    <a href="#" >Girl's All Clothing</a>
                  </div>
                  <div className="column">
                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Accessories And Equiment</h3>
                    <a href="#"></a>
                    <a href="#">Balls</a>
                    <a href="#">Bags and Backpacks</a>
                    <a href="#">Hats and Headwere</a>

                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>

                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Shop By Sport</h3>
                    <a href="#"></a>
                    <a href="#">Runnig</a>
                    <a href="#">Football</a>
                    <a href="#">Basketball</a>
                    <a href="#">Gym and Training</a>
                    <a href="#">Tennis</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* customise */}
          <div className="navbar">
            <div className="dropdown">
              <Text className="drop">Customise</Text>
              <div className="dropdown-content">
                <div className="header"></div>
                <div className="row">
                  <div className="column">
                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Featured</h3>
                    <a href="#"></a>
                    <a href="#">Nike By You New Releases</a>
                  </div>
                  <div className="column">
                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Nike By You</h3>
                    <a href=""></a>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                  </div>
                  <div className="column">
                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>By Sport</h3>
                    <a href="#"></a>
                    <a href="#">LifyStyle</a>
                    <a href="#">Runnig</a>
                    <a href="#">Basketball</a>
                    <a href="#">Football</a>
                  </div>
                  <div className="column">
                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Icons</h3>
                    <a href="#"></a>
                    <a href="#">Air Max</a>
                    <a href="#">Air Force</a>
                    <a href="#">Free</a>
                    <a href="#">Flyknit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* sale */}
          <div className="navbar">
            <div className="dropdown">
              <Text className="drop">Sale</Text>
              <div className="dropdown-content">
                <div className="header"></div>
                <div className="row">
                  <div className="column">
                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Featured</h3>
                    <a href="#"></a>
                    <a href="#">Shop all Sale</a>
                  </div>
                  <div className="column">
                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500"
                    }}>Men's Sale</h3>
                    <a href="#"></a>
                    <a href="#">Shoes</a>
                    <a href="#">Clothing</a>
                  </div>
                  <div className="column">
                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Women</h3>
                    <a href="#"></a>
                    <a href="#">Shoes</a>
                    <a href="#">Clothing</a>
                  </div>
                  <div className="column">
                    <h3 style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}>Kid's</h3>
                    <a href="#"></a>
                    <a href="#">Shoes</a>
                    <a href="#">Clothing</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Snikrs */}

          </div>
          <Text className="drop">SNIKRS</Text>
        </Box>
        <Box
          w={"100%"}
          ml={"20%"}
          display="flex"
          gap={5}
          justifyContent={"space-between"}
        >
          <InputGroup w={"80%"}>
            <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
            <Input borderRadius="20px" type="type" placeholder="Search.." />
          </InputGroup>
          <Link className="link heart">
            <AiOutlineHeart size={25} />
          </Link>
          <Link to={""} className="link">
            {" "}
            <BsBag size={20} />
          </Link>
          <Link style={{ marginTop: "10px" }} className="link shide"><Slider /></Link>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;

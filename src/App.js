import React, { useState } from "react";
import styled from "styled-components";
import image from "./image/undraw_authentication_re_svpt 1.png";
import { Link } from "react-router-dom";
import { Box, Container, px2vw } from "./loginStyles";
import Checkbox from "./Checkbox";
import { useTheme, Grid, useMediaQuery, Hidden } from "@mui/material";
// import { Lock, Person } from "@material-ui/icons";

function App() {
  // const history = useHistory();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesXXS = useMediaQuery(theme.breakpoints.down("xxs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  // xxs: 0, // small phone
  //     xs: 300, // phone
  //     sm: 600, // tablets
  //     md: 900, // small laptop
  //     lg: 1200, // desktop
  //     xl: 1536 // large screens
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Container
        style={{
          flexDirection: matchesSM ? "column" : "row",
          justifyContent: matchesMD ? "center" : null,
          margin: matchesMD ? 0 : 20,
        }}
      >
        <Hidden mdDown>
          <Box  style={{padding:matchesMD ? 0 : 20}}>
            <InnerContainer>
              <img
                style={{
                  display: "flex",
                  margin: "1rem auto",
                  width: `${px2vw(50, 300)}`,
                }}
                alt="loginimage"
                src={image}

                // height="200px"
              />
            </InnerContainer>
          </Box>
        </Hidden>

        <Box style={{padding:matchesMD ? 0 : 20}}>
          <Styles style={{ width: matchesMD ? "100%" : `${px2vw(500, 1047)}` }}>
            <div className="content">
              <div className="text">
                <h1 style={{ fontWeight: "700", fontSize: 30 }}>Log In</h1>
                <br />
              </div>
              <form action="#" style={{ padding: "5%" }}>
                <h1 style={{ fontWeight: "500", fontSize: 20 }}>Login ID</h1>
                <div className="field" style={{ marginBottom: 20 }}>
                  {/* <Person
                style={{ position: "absolute", bottom: "14px", left: "1rem" }}
              /> */}

                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Login ID"
                    required
                  />
                </div>

                <h1 style={{ fontWeight: "500", fontSize: 20 }}>Password</h1>
                <div className="field" style={{ marginBottom: 20 }}>
                  {/* <Lock
                style={{ position: "absolute", bottom: "14px", left: "1rem" }}
              /> */}
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter Password"
                  />
                </div>
                <InnerContainer3>
                  <div style={{ fontFamily: "system-ui" }}>
                    <label>
                      <Checkbox
                        checked={checked}
                        onChange={handleCheckboxChange}
                      />
                      <span style={{ marginLeft: 8, marginRight:matchesXS? 0:matchesSM? 150:matchesMD ? 200 : 280 }}>
                        Remember Me
                      </span>
                    </label>
                    <span className="forgot-pass">
                      <a href="coming-soon">Forgot Password?</a>
                    </span>
                  </div>
                </InnerContainer3>
                <div style={{ fontFamily: "system-ui" }}>
                  <label>
                    <Checkbox
                      checked={checked}
                      onChange={handleCheckboxChange}
                    />
                    <span style={{ marginLeft: 8 }}>
                      Agree to{" "}
                      <span style={{ color: "#F78719" }}>
                        Terms & Conditions
                      </span>
                    </span>
                  </label>
                </div>

                <InnerContainer2>
                  <button onClick={(values) => console.log(values)}>
                    Sign in
                  </button>
                </InnerContainer2>
                <div className="signup">
                  Don’t have an account?
                  <a href="/signUp">
                    {" "}
                    <span style={{ color: "#F78719" }}>Register Here</span>
                  </a>
                </div>
              </form>
            </div>
          </Styles>
        </Box>
      </Container>
    </>
  );
}

export default App;
const InnerContainer = styled.div`
  height: ${px2vw(400, 961)};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const InnerContainer2 = styled.div`
  // height: ${px2vw(400, 961)};
  flex-direction: row;
  // width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer3 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  // align-items: center;
`;
const Styles = styled.div`
  display: flex;
  justify-content: center;
 
  // width:${px2vw(500, 1047)};
  height: 700px;
   
  .content {
    width: 700px;
    background: #ffff;
    border-radius: 15px;
    padding: 40px 30px;
    box-shadow: 0 22px 40px rgba(17, 96, 96, 0.2);
  }
  .text {
    text-align: center;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    h1 {
      font-size: 22px;
      font-weight: bold;
    }
    h3 {
      font-size: 18px;
      font-weight: bold;
    }
    p {
      font-size: 10px;
    }
  }
  .field {
    
    height: 50px;
    width: 100%;
    display: flex;
    position: relative;
    
    input {
      height: 100%;
      width: 100%;
      padding-left: 20px;
      font-size: 15px;
      outline: none;
      border-radius: 10px;
      // border: none;
      color: #595959;
      // background: #04072F66;
      border: 1px solid #04072F66
      // border: #04072F66
      border-radius: 10px;
      // box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
      &:focus ~ label {
        box-shadow: inset 2px 2px 5px #babecc, inset -1px -1px 2px #ffffff73;
      }
    }
    &:nth-child(2) {
      margin-top: 20px;
    }
    span {
      position: absolute;
      width: 50px;
      line-height: 50px;
      color: #595959;
    }
    label {
      position: absolute;
      top: 50%;
      left: 45px;
      pointer-events: none;
      color: #666666;
      transform: translateY(-50%);
    }
    .field input:focus ~ label {
      opacity: 0;
    }
  }
  .forgot-pass {
    text-align: right;
    margin: 10px 0 10px 5px;
    a {
      font-size: 16px;
      color:#F78719;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  button {
    margin: 15px 0;
    width: 50%;
  
    height: 50px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    background: #1575A7;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 2px 2px 5px #babecc, -5px -5px 10px #ffffff73;
    &:focus {
      color: #3498db;
      box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
    }
  }
  .signup {
    font-size: 16px;
    color: black;
    margin: 10px 0;
    a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        color: #F78719;
      }
    }
  }
`;

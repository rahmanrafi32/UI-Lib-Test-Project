import { Grid, styled } from "@material-ui/core";
import Image from "next/image";
import expenseIcon from "../src/assets/icons/expense.svg";
import orderIcon from "../src/assets/icons/orders.svg";
import salesIcon from "../src/assets/icons/sales.svg";
import userIcon from "../src/assets/icons/user.svg";

const MainDiv = styled("div")({
  padding: "0 30px",
});

const Card = styled("div")({
  width: 296,
  height: 131,
  borderRadius: 24,
  backgroundColor: "#fff",
});

const IconDiv = styled("div")({
  margin: "29px 9px 29px 20px",
  borderRadius: 18,
  width: 36,
  height: 71,
  display: "flex",
  justifyContent: "center",
});

const CardDetails = styled("div")({
  display: "flex",
  alignContent: "center",
});

const dashboard = () => {
  return (
    <MainDiv>
      <Grid container>
        <Grid item md={3} lg={3}>
          <Card>
            <CardDetails>
              <IconDiv sx={{ backgroundColor: "#F2F1FE" }}>
                <Image src={userIcon} alt="icon" />
              </IconDiv>
              <div style={{ marginTop: 20, fontWeight: 400 }}>
                <p>
                  New Leds
                  <br />
                  <span
                    style={{ color: "#663399", fontSize: 30, fontWeight: 700 }}
                  >
                    205
                  </span>
                </p>
              </div>
            </CardDetails>
          </Card>
        </Grid>
        <Grid item md={3} lg={3}>
          <Card>
            <CardDetails>
              <IconDiv sx={{ backgroundColor: "#C5DBFF" }}>
                <Image
                  src={salesIcon}
                  alt="icon"
                  style={{ display: "flex", justifyContent: "center" }}
                />
              </IconDiv>
              <div style={{ marginTop: 20 }}>
                <p>
                  Sales
                  <br />
                  <span
                    style={{ color: "#3981F7", fontSize: 30, fontWeight: 700 }}
                  >
                    $4201
                  </span>
                </p>
              </div>
            </CardDetails>
          </Card>
        </Grid>
        <Grid item md={3} lg={3}>
          <Card>
            <CardDetails>
              <IconDiv sx={{ backgroundColor: "#BCDDB3" }}>
                <Image src={orderIcon} alt="icon" />
              </IconDiv>
              <div style={{ marginTop: 20 }}>
                <p>
                  Orders
                  <br />
                  <span
                    style={{ color: "#5DAE49", fontSize: 30, fontWeight: 700 }}
                  >
                    80
                  </span>
                </p>
              </div>
            </CardDetails>
          </Card>
        </Grid>
        <Grid item md={3} lg={3}>
          <Card>
            <CardDetails>
              <IconDiv sx={{ backgroundColor: "#FFF6E0" }}>
                <Image src={expenseIcon} alt="icon" />
              </IconDiv>
              <div style={{ marginTop: 20 }}>
                <p>
                  Expense
                  <br />
                  <span
                    style={{ color: "#FFC620", fontSize: 30, fontWeight: 700 }}
                  >
                    $1200
                  </span>
                </p>
              </div>
            </CardDetails>
          </Card>
        </Grid>
      </Grid>
    </MainDiv>
  );
};

export default dashboard;

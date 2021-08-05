import { Grid, styled } from "@material-ui/core";
import Image from "next/image";
import userIcon from "../src/assets/icons/icon 6.svg";

const MainDiv = styled("div")({
  padding: "0 30px",
});

const Card = styled("div")({
  width: 296,
  height: 131,
  borderRadius: 24,
  backgroundColor: "#fff",
  margin: "0 20px",
});

const CardDetails = styled("div")({
  display: "flex",
});
const dashboard = () => {
  return (
    <MainDiv>
      <Grid container>
        <Grid item>
          <Card>
            <CardDetails>
              <div
                style={{
                  borderRadius: 18,
                  backgroundColor: "#F2F1FE",
                  width: 36,
                  height: 71,
                }}
              >
                <Image src={userIcon} alt="icon" />
              </div>
              <div>
                <p style={{}}>
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
        <Grid item>
          <Card>
            <CardDetails>
              <div
                style={{
                  borderRadius: 18,
                  backgroundColor: "#F2F1FE",
                  width: 36,
                  height: 71,
                }}
              >
                <Image
                  src={userIcon}
                  alt="icon"
                  style={{ display: "flex", justifyContent: "center" }}
                />
              </div>
              <div>
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
        <Grid item>
          <Card>
            <CardDetails>
              <div
                style={{
                  borderRadius: 18,
                  backgroundColor: "#F2F1FE",
                  width: 36,
                  height: 71,
                }}
              >
                <Image src={userIcon} alt="icon" />
              </div>
              <div>
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
        <Grid item>
          <Card>
            <CardDetails>
              <div
                style={{
                  borderRadius: 18,
                  backgroundColor: "#F2F1FE",
                  width: 36,
                  height: 71,
                }}
              >
                <Image src={userIcon} alt="icon" />
              </div>
              <div>
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

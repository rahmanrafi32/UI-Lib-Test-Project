import { Grid, styled } from "@material-ui/core";
import Image from "next/image";
import dashboardConfig from "../src/components/DashboardConfig";

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

const CardItems = styled("div")({
  display: "flex",
  alignContent: "center",
});

const CardDetails = styled("div")({
  marginTop: 20,
  fontWeight: 400,
});

const Span = styled("span")({
  fontSize: 30,
  fontWeight: 700,
});

const Title = styled("p")({
  color: "#43454D",
});

const dashboard = () => {
  return (
    <MainDiv>
      <Grid container>
        {dashboardConfig.map((item, index) => (
          <Grid item md={3} lg={3} key={index}>
            <Card>
              <CardItems>
                <IconDiv sx={{ backgroundColor: `${item.backgroundColor}` }}>
                  <Image src={item.icon} alt="icon" />
                </IconDiv>
                <CardDetails>
                  <Title>
                    {item.title}
                    <br />
                    <Span sx={{ color: `${item.textColor}` }}>
                      {item.quantity}
                    </Span>
                  </Title>
                </CardDetails>
              </CardItems>
            </Card>
          </Grid>
        ))}
      </Grid>
    </MainDiv>
  );
};

export default dashboard;

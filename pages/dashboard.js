import { Grid, styled } from "@material-ui/core";

const MainDiv = styled("div")({
  padding: "0 30px",
});

const Card = styled("div")({
  width: 296,
  height: 131,
  borderRadius: 24,
  backgroundColor: "#fff",
  margin:'0 20px'
});
const dashboard = () => {
  return (
    <MainDiv>
      <Grid container>
        <Grid item>
          <Card></Card>
        </Grid>
        <Grid item>
          <Card></Card>
        </Grid>
        <Grid item>
          <Card></Card>
        </Grid>
        <Grid item>
          <Card></Card>
        </Grid>
      </Grid>
    </MainDiv>
  );
};

export default dashboard;

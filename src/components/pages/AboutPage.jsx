import React from "react";

import { Modal, ModalClose, ModalDialog, Stack, Typography } from "@mui/joy";
const AboutPage = () => {
  const [layout, setLayout] = React.useState("full");
  return (
    <React.Fragment>
      <Stack direction="row" spacing={1}></Stack>
      {/* <Modal
        style={{ background: "#333" }}
        open={!!layout}
        onClose={() => setLayout(null)}
      >
        <ModalDialog
          aria-labelledby="layout-modal-title"
          aria-describedby="layout-modal-description"
          layout={layout}
        >
          <ModalClose />
          <Typography
            style={{
              textContent: "justify",
              fontSize: "0.9em",
              minHeight: "90vh",
              width: "97vw",
              background: "#888",
            }}
            id="layout-modal-description"
            textColor="text.tertiary"
          > */}
      <div style={{ color: "#fff", margin: "0px 25%" }}>
        <h2>Manhattan: A Tale of Two Population Extremes </h2>
        <p style={{ width: "750px", textAlign: "justify" }}>
          Measuring just 13 miles long by 2 miles wide, New York City's
          most-famous borough has a well-earned reputation for shoebox-sized
          apartments, shoulder-to-shoulder subway commutes, and cubicle-farm
          high-rises. Though the US Census provides a cozy estimate of 1.6
          million people calling Manhattan 'home', the island's true population
          swells. To put this in perspective, if Manhattan were a state,
          neighborhood-by-neighborhood is of importance to urban planners,
          public safety managers, and armchair geographers alike. By no means
          does Manhattan's population spread out evenly across the length of
          island- one can imagine the Empire State Building being filled to the
          brim with inter-state workers by late morning, while at the same time
          much of the working-age population of sleepy uptown hamlet. Finding
          appropriate sources for research project undertaken by Justin Fung
          while studying at Columbia University under the direction of former
          NYC Transportation Commissioner Lucius J. Riccio, and ultimately, a
          transit-based solution was found right under their feet. Considering
          the 'vehicle-of-choice' for most Manhattanites is one of the MTA's
          6,500 stainless-steel subway cars, and that the nearly 150 stations
          serving Manhattan provide reasonably-uniform coverage across the
          island, it stood to reason that subway entrance and exit data would be
          a pretty good proxy for population distribution across the city. Using
          the Metropolitan Transportation Authority's freely-available turnstile
          database and Steven Romalewski's MTA subway data in GIS format,
          estimates for the net flows of people in and out of Manhattan
          neighborhoods were made on an hour-by-hour basis both historically and
          for future dates. A time-series analysis of this data confirms that
          usage patterns are heavily dependent on time, day, and location. The
          visualization contained herein is the realization of a model of these
          flows for a hypothetical week in late Spring.
          <br />
          <br />
          Design, Development, Data & Modelling - <a href="#">Justin Fung</a>
          <br />
          Design, Layout inspiration -{" "}
          <a href="#">Oak Ridge National Laboratory, Urbica Design</a>
          <br />
          Map engine - <a href="#">Mapbox GLJS</a>
          <br />
          Graphing engine - <a href="#">D3.js</a>
          <br />
          Github -<a href="#">@citrusvanilla</a>
        </p>
      </div>
      {/* </Typography>
        </ModalDialog>
      </Modal> */}
    </React.Fragment>
  );
};

export default AboutPage;

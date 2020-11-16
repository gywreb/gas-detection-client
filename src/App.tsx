import { Card, Col, Row, Typography } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";

const App: React.FC = () => {
  const [data, setData] = useState<{ gas: number } | null>(null);
  useEffect(() => {
    const fecthData = async () => {
      const { data } = await axios.get(
        "https://hokage-tempcheck.herokuapp.com/api/data"
      );
      if (data) setData(data);
    };
    fecthData();
  });
  if (!data) return <></>;
  else
    return (
      <>
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#222",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                  parallax: {
                    force: 60,
                  },
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                grab: {
                  distance: 400,
                },
              },
            },
            particles: {
              color: {
                value: "#ccc",
              },
              links: {
                color: {
                  value: "#ccc",
                },
                distance: 150,
                enable: true,
                opacity: 0.4,
              },
              move: {
                attract: {
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                enable: true,
                outModes: {
                  bottom: "out",
                  left: "out",
                  right: "out",
                  top: "out",
                },
              },
              number: {
                density: {
                  enable: true,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
                animation: {
                  enable: true,
                  minimumValue: 0.1,
                  speed: 1,
                },
              },
              shape: {
                type: "char",
              },
              size: {
                value: 12,
                animation: {
                  minimumValue: 10,
                  speed: 10,
                },
              },
              stroke: {
                width: 1,
                color: {
                  value: "#ccc",
                  animation: {
                    enable: false,
                    speed: 1,
                    sync: true,
                  },
                },
              },
            },
            detectRetina: true,
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: "990px", margin: "0px auto" }}>
            <Row
              gutter={[16, 16]}
              style={{ height: "100vh" }}
              justify="center"
              align="middle"
            >
              <Col>
                <Card>
                  <Typography.Title level={1}>
                    Gas : {data.gas}
                  </Typography.Title>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
};

export default App;

import { Col, Row } from "react-bootstrap";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as CiIcons from "react-icons/ci";
import * as TbIcons from "react-icons/tb"

const dashboard = [
  {
    id: 1,
    icon: <BsIcons.BsFillTelephoneFill />,
    title: "Today Follow up leads",
    list: 35,
    color: "#f9cc73",
  },
  {
    id: 2,
    icon: <GiIcons.GiCardExchange />,
    title: "Leads Converted",
    list: 125,
    color: "#61BF60",
  },
  {
    id: 3,
    icon: <TbIcons.TbArrowBearRight />,
    title: "Leads that needs action",
    list: 143,
    color: "#7286D3",
  },
  {
    id: 4,
    icon: <CiIcons.CiHospital1 />,
    title: "Active clinics",
    list: 35,
    color: "#FF8E9E",
  },
];
function Statistics() {
  return (
    <Row className="Dashboard">
      {dashboard.map((a, i) => {
        return (
          <Col xs={12} sm={6} md={6} lg={6} xl={3} className="mt-2" key={i}>
            <div
              className="box"
              style={{ borderBottom: `5px solid ${a.color}` }}
            >
              <div style={{ display: "flex" }}>
                <div className="icon" style={{ backgroundColor: a.color }}>
                  {a.icon}
                </div>
                <div className="dash-detail">
                  <span>{a.title}</span>
                  <br></br>
                  <span className="text-bold">{a.list}</span>
                </div>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Statistics;

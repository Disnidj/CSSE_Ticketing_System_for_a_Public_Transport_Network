import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  Input,
  Button,
} from "reactstrap";
import { AuthCustomer , UpdateAdmin } from "../../Services/AuthServices";
import Swal from "sweetalert2";
import moment from "moment";
import profile from '../../img/user.png'

//import backgroud picture
import BgAdmin6 from '../../img/background.jpeg';

const Profile = () => {
  const navigate = useNavigate();
  const [updateChange, setUpdaetChange] = useState(false);
  const ChangetoUpdate = (e) => {
    e.preventDefault();
    setUpdaetChange(true);
  };

  const getLoggedUser = async () => {
    let token = localStorage.getItem("token");
    let data = await AuthCustomer(token);
    console.log(data);
    if (data?.status == 200) {
      setUserId(data?.data?._id);
      setUserRole(data?.data?.userRole);
      setUserPassword(data?.data?.password);

      setName(data?.data?.name);
      setEmail(data?.data?.email);
      setMobileNo(data?.data?.mobileno);
      setNIC(data?.data?.NIC);
      setDate(
        moment(data?.data?.date).format(" YYYY-MM-DD ") +
          " " +
          moment(data?.data?.date).format(" h:mm A ")
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Data Fected Failed Login again..!",
      });
      navigate("/login");
    }
  };

  useEffect(() => {
    getLoggedUser();
  }, []);

  const [UserId, setUserId] = useState("");
  const [UserRole, setUserRole] = useState("");
  const [UserPassword, setUserPassword] = useState("");

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [NIC, setNIC] = useState("");
  const [Date, setDate] = useState("");

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleMobileNo = (e) => {
    e.preventDefault();
    setMobileNo(e.target.value);
  };

  const handleNIC = (e) => {
    e.preventDefault();
    setNIC(e.target.value);
  };


  const UpdateData = async (e) => {
    e.preventDefault();
    const regdata = {
      name: Name,
      mobileno: MobileNo,
      email: Email,
      password: UserPassword,
      NIC: NIC,
      userRole: UserRole,
    };
    console.log("sending data", regdata);
    let data = await UpdateAdmin(UserId, regdata);
    console.log("Reg Group ", data);
    if (data?.data?._id) {
      Swal.fire({
        icon: "success",
        title: "Congrats!",
        text: "Update successfull...!",
      });
      navigate("/dashboard");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Update Failed...!",
      });
    }
  };

  return (
    <div style={{ marginTop: '0px',backgroundImage: `url(${BgAdmin6})`,   backgroundSize: 'cover', padding:'10px 20% 10px 20%' }}>
    <div style={{ marginTop: "70px", marginBottom: "70px" }} >
      <div>
        <center>
        <Card class="p-3 mb-2 bg-secondary text-white" style={{ marginLeft: "100px", marginRight: "100px" }}>
          <CardHeader>
            <CardTitle style={{ color: "#051094", fontSize: "40px", fontWeight:"bold" }}>
              My Profile
            </CardTitle>
          </CardHeader>
          <CardBody>
          <img src={profile} style={{ width: 200, marginTop: '10px', marginBottom: '10px', marginLeft: '10px', marginRight: '10px' }}></img>
            <div style={{ width: "600px" }}>
              <Form>
                <Input
                  type="text"
                  className="input"
                  value={Name}
                  onChange={(e) => handleName(e)}
                  readOnly={!updateChange ? true : false}
                />
                <br />
                <Input
                  type="text"
                  className="input"
                  value={Email}
                  onChange={(e) => handleEmail(e)}
                  readOnly={!updateChange ? true : false}
                />
                <br />
                <Input
                  type="text"
                  className="input"
                  value={MobileNo}
                  onChange={(e) => handleMobileNo(e)}
                  readOnly={!updateChange ? true : false}
                />
                <br />
                <Input
                  type="text"
                  className="input"
                  value={NIC}
                  onChange={(e) => handleNIC(e)}
                  readOnly={!updateChange ? true : false}
                />
                <br/>
                <Input                 
                  type="text"
                  className="input"
                  value={Date}
                  readOnly={true}
                />
                <br />
                <Button
                  color="primary"
                  onClick={(e) => ChangetoUpdate(e)}
                  style={{ display: updateChange ? "none" : "flex" }}
                >
                  Click To Update
                </Button>
                <Button
                  className="btn btn-success"
                  onClick={(e) => UpdateData(e)}
                  style={{ display: updateChange ? "flex" : "none" }}
                >
                  Update
                </Button>
              </Form>
            </div>
          </CardBody>
        </Card>
        </center>
      </div>
    </div>
    </div>
  );
};

export default Profile;

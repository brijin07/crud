import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { getAllstudent, updatestudent } from "../API/allapi";

function Updateform({ close, iddata }) {
  const [fordata, setformdate] = useState({
    username: "",
    email: "",
    date: "",
    phone: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdate({ ...fordata, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await updatestudent(iddata, fordata);
      console.log(result);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    editstudent();
  }, []);
  

  const editstudent = async () => {
    const { data } = await getAllstudent();

    console.log(data);

    let existUser = data.find((item) => item._id === iddata);
    setformdate(existUser);
  };

  return (
    <div className=" w-full h-[50vh] p-6">
      <h1 className="font-bold text-center">update student</h1>
      <form onSubmit={handlesubmit}>
        <TextField
          className="w-full "
          value={fordata.username}
          name="username"
          type="text"
          id="standard-basic"
          label="username"
          variant="standard"
          onChange={handlechange}
        />
        <br />
        <TextField
          className="w-full"
          value={fordata.email}
          name="email"
          type="email"
          id="standard-basic"
          label="email"
          variant="standard"
          onChange={handlechange}
        />
        <br />
        <div className="mt-4">
          <TextField
            className="w-full"
            value={fordata.date}
            name="date"
            type="date"
            id="standard-basic"
            variant="standard"
            onChange={handlechange}
          />
          <br />
        </div>
        <TextField
          className="w-full"
          value={fordata.phone}
          name="phone"
          type="phone"
          id="standard-basic"
          label="phone"
          variant="standard"
          onChange={handlechange}
        />
        <br />

        <br />
        <div className="flex gap-5">
          <Button
            sx={{ backgroundColor: "red" }}
            className="mt-3"
            variant="contained"
            onClick={close}
          >
            close
          </Button>
          <Button
            sx={{ backgroundColor: "green" }}
            className="mt-3"
            variant="contained"
            type="submit"
          >
            submit
          </Button>
          <br />
          <br />
        </div>
      </form>
    </div>
  );
}

export default Updateform;

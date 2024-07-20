import React, { useEffect, useState } from "react";
import deletesvg from "../assets/delete.svg";
import { Button } from "@mui/material";
import { deleteStudent, getAllstudent } from "../API/allapi";
import EditModal from "../components/EditModal";
import { useDispatch, useSelector } from "react-redux";
useDispatch


function Studentdata() {
  const [data, setData] = useState([]);
  

  // take value from redux
  const inputValue = useSelector((state) => state.input.value);

  // filter data for searchbar
  const filteredData = data.filter((item) =>
    item.username.toLowerCase().includes(inputValue.toLowerCase())
  );
  

  const allstudent = async () => {
    try {
        const response = await getAllstudent();
        // console.log(response);
    
        if (response.status == 200) {
          setData(response.data);

        }
    } catch (error) {
        console.log("cannot fetch data",error);
    }
  };


  useEffect(() => {
    allstudent();
  }, []);


  const removestudent=async(id)=>{
    try {
        const response = await deleteStudent(id)
        console.log('deleted',response);

        if (response.status == 200) {
            window.location.reload();
          }
          else {
            alert('operation failed !')
          }
    } catch (error) {
        console.log(error);

    }
  }
  

  return (
    <div className=" overflow-x-auto sm:rounded-lg flex justify-center p-5">
      <div className="w-[100%]">
        <table className="w-full shadow-md  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                sl/no
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-[45px] py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((detail, index) => (
              <tr key={detail._id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {detail.username}
                </td>
                <td className="px-6 py-4">{detail.email}</td>
                <td className="px-6 py-4">{detail.date}</td>
                <td className="px-6 py-4">{detail.phone}</td>
                <td className="px-6 py-4">
                  <div className="flex">
                    <EditModal data={detail._id} />
                    <Button onClick={()=>removestudent(detail._id)}>
                      <img src={deletesvg} alt="" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Studentdata;

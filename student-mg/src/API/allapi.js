import service from "./axios"

// addstudent
export const addstudent=(data)=>{
        return  service.post("/addStudent",data);
}
// getallstudents
export const getAllstudent=async()=>{
        return await service.get("/getStudent"); 
}

// deletestudent
export const deleteStudent=async(id)=>{
    return await service.delete(`/deletestudent/${id}`); 
}


export const updatestudent=async(id,body)=>{
        return await service.put(`/updatestudent/${id}`,body); 
    }






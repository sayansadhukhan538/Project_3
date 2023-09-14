import axiosInstances from "../utils/axios";

const dashboardNetworkCall = async()=>{
    try {
        const res = await axiosInstances.get('users?page=2');
        return Promise.resolve({
            success:true,
            data:res.data.data,
        })
    } catch (error) {
        console.log(error);
        return Promise.resolve({
            success:false,
            data:null
        })
    }

}
export {dashboardNetworkCall};
import axios from "axios";

export default {
    getEmployees: function()  {
        return axios.get("https://dummy.restapiexample.com/api/v1/employees");
    }
};
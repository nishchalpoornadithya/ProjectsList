import axios from "axios";

export const getProjectsList = () => {
    axios.get("https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json")
    .then(res => console.log(res))
    .catch(err => console.error("Error fetching data:", err));
}
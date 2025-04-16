import axios from "axios";


export const getProjectsList = async () => {
    try {
      const response = await axios.get("https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
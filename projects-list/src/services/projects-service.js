import axios from "axios";


export const getProjectsList = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_PROJECTS_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
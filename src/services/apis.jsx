import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export async function fetchMatchData() {
  try {
    const response = await axios.get(`${API_BASE_URL}/getMatchSchedule`);
    console.log(response.status);
    return response.data;
  } catch (error) {
    console.error('Error fetching match schedule:', error);
    if (error.response) {
      // Server responded with a status other than 2xx
      throw new Error(`Failed to fetch match data: ${error.response.status} ${error.response.statusText}`);
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('No response from server. Please check your connection or try again later.');
    } else {
      // Something else happened
      throw new Error(`Unexpected error: ${error.message}`);
    }
  }
}

export async function fetchFantasyMatchSchedule() {
  try {
    const response = await axios.get(`${API_BASE_URL}/getFantasyMatchSchedule`);
    return response.data;
  } catch (error) {
    console.error('Error fetching fantasy match schedule:', error);
    if (error.response) {
      throw new Error(`Failed to fetch fantasy match data: ${error.response.status} ${error.response.statusText}`);
    } else if (error.request) {
      throw new Error('No response from server. Please check your connection or try again later.');
    } else {
      throw new Error(`Unexpected error: ${error.message}`);
    }
  }
}


export async function fetchLiveMatchInfo(liveMatchUrl, type = "match info") {
  const trimmedUrl = liveMatchUrl.replace(/\/[^\/]*$/, "");
    console.log("Sending payload:", { trimmedUrl, type });
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/crex/liveMatch/getdata/", {
        liveMatchUrl: trimmedUrl,
        type,
      });
      console.log("Sending payload:", { liveMatchUrl, type });
      return response.data;
    } catch (error) {
      console.error("Failed to fetch live match info:", error);
      throw error;
    }
  }

  

  export async function fetchLiveMatchScorecard(liveMatchUrl, type = "scorecard") {
    const trimmedUrl = liveMatchUrl.replace(/\/[^\/]*$/, "");
    console.log("Sending payload:", { trimmedUrl, type });
  
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/crex/liveMatch/getdata/",
        {
          liveMatchUrl: trimmedUrl,
          type,
        }
      );
  console.log(response);
      // Check for HTTP status
      if (response.status === 200) {
        return { success: true, data: response.data };
      } else {
        return {
          success: false,
          message: "Match data not available yet.",
          status: response.status,
        };
      }
    } catch (error) {
      // Handle request error (e.g., network issue or 500 error)
      return {
        success: false,
        message: "No match scorecard available yet",
        status: error.response?.status || 500,
      };
    }
  }
  
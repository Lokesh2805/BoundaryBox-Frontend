import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export async function fetchMatchData() {
  try {
    const response = await axios.get(`${API_BASE_URL}/getMatchSchedule`);
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
    console.log("Sending payload:", { liveMatchUrl, type });
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/crex/liveMatch/getdata/", {
        liveMatchUrl,
        type,
      });
      console.log("Sending payload:", { liveMatchUrl, type });
      return response.data;
    } catch (error) {
      console.error("Failed to fetch live match info:", error);
      throw error;
    }
  }
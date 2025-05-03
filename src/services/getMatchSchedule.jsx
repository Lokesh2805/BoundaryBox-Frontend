export async function fetchMatchData() {
    const response = await fetch('http://127.0.0.1:8000/api/getMatchSchedule');
    if (!response.ok) {
      throw new Error('Failed to fetch match data');
    }
    return await response.json();
  }
  
  export async function fetchFantasyMatchSchedule() {
    const response = await fetch('http://127.0.0.1:8000/api/getFantasyMatchSchedule');
    if (!response.ok) {
      throw new Error('Failed to fetch match data');
    }
    return await response.json();
  }

  
const API_URL = process.env.REACT_APP_API_URL;

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/api/data`);
    if (!response.ok) throw new Error("Network error");
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
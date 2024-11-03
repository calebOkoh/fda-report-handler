import axios from "axios";

export async function fetchData() {
    try {
        const response = await axios.get("/dataStore.json");
        return response.data;
    } catch (error) {
        console.error("Error Fetching data from data:", error)
        throw error
    }
}
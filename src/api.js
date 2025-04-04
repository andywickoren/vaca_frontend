const BASE_URL = "http://localhost:5001";
export async function addTrip(tripData) {
  try {
    const response = await fetch(`${BASE_URL}/trips`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tripData),
    });

    if (!response.ok) {
      throw new Error("Failed to add trip");
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding trip:", error);
    throw error;
  }
}

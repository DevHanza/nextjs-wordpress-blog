const API_URL = process.env.API_URL!;

export async function fetchAPI(endpoint: string) {
  try {
    if (!API_URL) throw new Error("API URL is missing!");

    const res = await fetch(`${API_URL}${endpoint}`, {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch.");
    }

    return res;
  } catch (error) {
    console.error("fetchAPI failed:", error);
    return null;
  }
}

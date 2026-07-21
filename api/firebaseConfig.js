export default function handler(request, response) {
  const config = process.env.FIREBASE_CONFIG;
  if (!config) {
    return response.status(404).json({ error: "FIREBASE_CONFIG environment variable not set" });
  }
  try {
    const jsonConfig = JSON.parse(config);
    return response.status(200).json(jsonConfig);
  } catch (err) {
    return response.status(500).json({ error: "Failed to parse FIREBASE_CONFIG env var: " + err.message });
  }
}

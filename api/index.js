// A simple in-memory store
let storedData = null;

module.exports = (req, res) => {
  if (req.method === "POST") {
    // Receive JSON data from Roblox Studio
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        storedData = data; // save it in memory
        res.status(200).json({ status: "success", received: data });
      } catch (err) {
        res.status(400).json({ status: "error", message: "Invalid JSON" });
      }
    });

  } else if (req.method === "GET") {
    // Send stored data to Roblox Studio
    res.status(200).json({ data: storedData });
  } else {
    res.status(405).json({ status: "error", message: "Method not allowed" });
  }
};

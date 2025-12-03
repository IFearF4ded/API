// api/index.js
let messages = [];

module.exports = (req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        messages.push(data); // append to list
        res.status(200).json({ status: "success", received: data });
      } catch (err) {
        res.status(400).json({ status: "error", message: "Invalid JSON" });
      }
    });
  } else if (req.method === "GET") {
    res.status(200).json({ messages });
  } else {
    res.status(405).json({ status: "error", message: "Method not allowed" });
  }
};

// api/cookies.js
module.exports = (req, res) => {
  // Get the raw cookie string from the request headers
  const cookies = req.headers.cookie || "";
  res.status(200).json({ receivedCookies: cookies });
};

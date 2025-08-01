export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  try {
    const res30 = await fetch(
      "https://kaito.irys.xyz/api/community-mindshare?window=30d"
    );
    const data30 = await res30.json();

    const res90 = await fetch(
      "https://kaito.irys.xyz/api/community-mindshare?window=90d"
    );
    const data90 = await res90.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ data30, data90 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default async function handler(req, res) {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: "userId is required" });
  }

  try {
    const apiRes = await fetch(
      `https://gomtu.xyz/api/kaito/leaderboard-rank?ticker=IRYS&duration=7D,30D,3M,6M&userId=${userId}`
    );
    const data = await apiRes.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

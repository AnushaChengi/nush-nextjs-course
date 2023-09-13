function handler(req, res) {
  const eventId = req.query.eventId;
  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status("422").json({ message: "Invalid inputs" });
      return;
    }
    console.log(email, text, name);
    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    res.status("201").json({ message: "Addded Comment", comment: newComment });
  }
  if (req.method === "GET") {
    const dummyList = [
      {
        id: "c1",
        text: "Helooo",
        name: "Nush",
      },
      {
        id: "c2",
        text: "Helooo 2",
        name: "Cheng",
      },
    ];
    res.status("201").json({ comments: dummyList });
  }
}

export default handler;

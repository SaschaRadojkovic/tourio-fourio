import dbConnect from "../../../db/connect";
import Place from "../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Place.find().sort("name");

    return response.status(200).json(places);
  }
  if (request.method === "POST") {
    try {
      const placeData = request.body;
      console.log("request", placeData);
      const place = new Place(placeData);
      await place.save();
      response.status(201).json({ status: "place created" });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "PUT") {
    console.log(`want to update place.New Place:${request.body}`);
  }
}

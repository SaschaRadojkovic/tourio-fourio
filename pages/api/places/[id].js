import dbConnect from "../../../db/connect";
import Place from "../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Place.findById(id);

    if (!place) {
      return response.status(404).json({ status: "Not Found" });
    }

    return response.status(200).json(place);
  }
  if (requestmethod === "POST") {
    const createPlace = await Place.create(id);
    return response.status(200).json(createPlace);
  }

  if (request.method === "PATCH") {
    const updatedPlace = await Place.findByIdAndUpdate(id, {
      $set: request.body,
    });
    console.log(updatedPlace);
    return response.status(200).json({ status: "Place updated" });
  }
  if (request.method === "DELETE") {
    const deletedPlace = await Place.findByIdAndDelete(id);
    return response.status(200).json({ status: "Place deleted" });
  }

  return response.status(405).json({ status: "Method not allowed" });
}

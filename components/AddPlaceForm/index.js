import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import { StyledHeader, StyledList } from "../CardList/CardList.styled";
import { FormWrapper, StyledLink1, StyledLink2 } from "./AddPlaceForm.styled";

export default function AddPlaceForm() {
  const router = useRouter();

  const products = useSWR(`./api/places`);
  async function handleAddPlace(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const placeData = Object.fromEntries(formData);
    console.log("placeData", placeData);
    try {
      const response = await fetch(`./api/places`, {
        method: "POST",
        body: JSON.stringify(placeData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
        router.push(`/`);
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async function handleDeleteProduct() {
    try {
      await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      router.push("/");
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <StyledList>
        <StyledLink2 href="/">back</StyledLink2>
        <StyledHeader>
          <FormWrapper onSubmit={handleAddPlace}>
            <h2>Add a new Place</h2>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" />

            <label htmlFor="imageURL">Image Url</label>
            <input id="imageURL" type="text" name="image" />

            <label htmlFor="location">Location</label>
            <input id="location" type="text" name="location" />

            <label htmlFor="mapURL">Map Url</label>
            <input id="mapURL" type="text" name="mapURL" />

            <label htmlFor="description">description</label>
            <textarea id="description" type="text" name="description" />

            <button type="submit">save place</button>
          </FormWrapper>
        </StyledHeader>
      </StyledList>
    </>
  );
}

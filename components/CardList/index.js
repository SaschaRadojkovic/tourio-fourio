import Image from "next/image";

import useSWR from "swr";
import { StyledLink, StyledLink1 } from "../AddPlaceForm/AddPlaceForm.styled";
// import places from "../../db.json";
import { StyledHeader, StyledImage, StyledList } from "./CardList.styled";

export default function CardList() {
  //   const router = useRouter();
  const { data } = useSWR("api/places");
  console.log("data", data);
  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <StyledLink1 href="/addPage">+ Place</StyledLink1>
      <hr></hr>
      <StyledList>
        {data.map((place) => {
          return (
            <StyledHeader style={{ position: "relative" }} key={place._id}>
              <h4
                style={{
                  position: "absolute",
                  color: "white",
                  top: 130,
                  left: 40,
                }}
              >
                {place.name}
              </h4>

              <span>{place.location}</span>
              <StyledImage src={place.image} alt="" width={150} height={150} />
              {/* <p>{place.description}</p>
              <Link href={place.mapURL}>google maps</Link> */}
            </StyledHeader>
          );
        })}
      </StyledList>
    </>
  );
}

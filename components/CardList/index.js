import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
// import places from "../../db.json";
import { StyledHeader, StyledList } from "./CardList.styled";

export default function CardList() {
  //   const router = useRouter();
  const { data } = useSWR("api/places");
  console.log("data", data);
  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <StyledList>
        {data.map((place) => {
          return (
            <StyledHeader key={place._id}>
              <h2>{place.name}</h2>
              <p>{place.location}</p>
              <Image src={place.image} alt="" width={150} height={150} />
              {/* <p>{place.description}</p>
              <Link href={place.mapURL}>google maps</Link> */}
            </StyledHeader>
          );
        })}
      </StyledList>
    </>
  );
}

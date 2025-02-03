import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  return (
    <>
      {isLoading && <Spinner size="lg" />}
      {error && <Text textColor="red.300">{error} while fetching genres</Text>}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedUrl(genre.image_background)}
                borderRadius={2}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

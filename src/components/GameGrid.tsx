import { SimpleGrid, Text } from "@chakra-ui/react";
import { Platform, useGames } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return <Text color={"red.300"}>{error} while fetching games</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={5}
      padding={{ sm: "15px", md: "15px", lg: "25px" }}
    >
      {isLoading && arr.map((sk) => <GameCardSkeleton key={sk} />)}
      {games.map((game) => (
        <GameCard key={game.id} game={game}></GameCard>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;

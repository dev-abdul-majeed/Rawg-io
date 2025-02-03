import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton height="250px" />
        <CardBody>
          <SkeletonText />
          <HStack spacing={2} marginTop={3}>
            <SkeletonCircle />
            <SkeletonCircle />
            <SkeletonCircle />
          </HStack>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;

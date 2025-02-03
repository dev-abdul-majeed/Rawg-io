import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius='10px'>
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
  );
};

export default GameCardSkeleton;

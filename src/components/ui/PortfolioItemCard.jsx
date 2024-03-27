import {
  Tag,
  //   TagLabel,
  //   TagLeftIcon,
  //   TagRightIcon,
  //   TagCloseButton,
} from "@chakra-ui/react";

export const PortfolioItemCard = ({ item }) => {
  return (
    <>
      <img src={item.imageUrl} width="100" height="100" />
      <p>{item.description}</p>
      <Tag>Sample Tag</Tag>
    </>
  );
};

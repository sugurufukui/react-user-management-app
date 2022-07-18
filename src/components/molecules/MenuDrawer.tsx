import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickHomeUserManagement: () => void;
  onClickHomeSetting: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const {
    isOpen,
    onClose,
    onClickHome,
    onClickHomeUserManagement,
    onClickHomeSetting,
  } = props;

  return (
    <Drawer isOpen={isOpen} placement="left" size="xs" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>
              TOP
            </Button>
            <Button w="100%" onClick={onClickHomeUserManagement}>
              ユーザー一覧
            </Button>
            <Button w="100%" onClick={onClickHomeSetting}>
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});

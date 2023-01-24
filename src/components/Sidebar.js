import React from "react";
import s from "../styles/Sidebar.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import Logo from "./Logo";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const {state}= useLocation();
  const userID=state

  return (
    <>
      <Button ref={btnRef} colorScheme="black" onClick={onOpen}>
        <img className="icon" src="./menu.png" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="black" color="white">
          <DrawerCloseButton />
          <DrawerHeader fontSize="2rem">
            <Logo />
          </DrawerHeader>

          <DrawerBody className="drawContainer">
            <Link to="/" className="sidebar" state={userID}>
              Home
            </Link>
            <Link to="/profile" className="sidebar" state={userID}>
              Profile
            </Link>
            <Link to="/about" className="sidebar" state={userID}>
              About
            </Link>
            <Link to="/signin" className="sidebar">
              Sign In
            </Link>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Sidebar;

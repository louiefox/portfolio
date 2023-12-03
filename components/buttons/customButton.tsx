
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";

interface CustomBtnProps {
  title: string;
  icon: "Github" | "none";
  variant:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  onClick?: () => void;
}

export default function CustomBtn(props: CustomBtnProps) {
  if (props.icon != "Github") {
    return (
      <Button color="primary" variant={props.variant} onClick={props.onClick}>
        {props.title}
      </Button>
    );
  } else {
    return (
      <Button
        color="primary"
        variant={props.variant}
        onClick={props.onClick}
        startContent={<FontAwesomeIcon icon={faGithub} color="white" size="xl" />}
      >
        {props.title}
      </Button>
    );
  }
}

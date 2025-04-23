
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";

interface CustomBtnProps {
  title: string;
  icon: "Github" | "Youtube" | "none";
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
  if (props.icon == "none") {
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
        startContent={<FontAwesomeIcon icon={props.icon == "Github" ? faGithub : faYoutube} color="white" size="xl" />}
      >
        {props.title}
      </Button>
    );
  }
}

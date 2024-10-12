import { Spinner } from "@chakra-ui/react";

export default function loading() {
  return (
    <div className="full-height centered">
      <Spinner />
    </div>
  );
}

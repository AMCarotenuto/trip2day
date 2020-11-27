import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import TopNavbar from "./components/TopNavbar";
import Header from "./components/Header";
import Link from "next/link";
import { AddCardViaggio } from "./addCardViaggio";

function NewTrip() {
  return (
    <div>
      <TopNavbar />
      <Header />
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Choose your destination"
          aria-label="Choose your destination"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">
            <Link href="./Suggestions">Send request of suggestions</Link>
          </Button>
          <AddCardViaggio />
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default NewTrip;

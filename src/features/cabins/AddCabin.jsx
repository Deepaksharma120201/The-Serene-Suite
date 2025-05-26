import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.open>
        <Modal.window name="cabin-form">
          <CreateCabinForm />
        </Modal.window>
      </Modal>
    </div>
  );
}

export default AddCabin;

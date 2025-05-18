import Modal from "@/app/components/modal";
import ModalBasicStyle from "../../../components/ModalBasicStyle";
import InputRadioButton from "../../../components/InputRadioButton";
import ModalButton from "../../../components/ModalButton";

type RadioButtonProps = {
  title: string;
  name: string;
  value: string;
};

type ModalGenerateReporteProps = {
  isOpen: boolean;
  selectedValue: string;
  radioButtonProps: RadioButtonProps[];
  onClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickReporte: () => void;
  onClickCancelar: () => void;
};

function ModalGenerateReporte({
  isOpen,
  onClose,
  onChange,
  selectedValue,
  onClickReporte,
  onClickCancelar,
  radioButtonProps,
}: ModalGenerateReporteProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBasicStyle>
        <div className="flex flex-wrap">
          {radioButtonProps.map((props, index) => (
            <InputRadioButton
              key={index}
              title={props.title}
              name={props.name}
              value={props.value}
              selectedValue={selectedValue}
              onChange={onChange}
            />
          ))}
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <ModalButton
            children="Generar"
            className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
            onClick={onClickReporte}
          />
          <ModalButton
            children="Cancelar"
            className={`mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto`}
            onClick={onClickCancelar}
          />
        </div>
      </ModalBasicStyle>
    </Modal>
  );
}

export default ModalGenerateReporte;

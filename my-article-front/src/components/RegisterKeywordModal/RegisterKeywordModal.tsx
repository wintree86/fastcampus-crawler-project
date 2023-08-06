'use client'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";

interface RegisterKeywordModalProps {
  isOpen: boolean;
  onOpenClose: () => void;
  onSubmit: () => void;
}
function RegisterKeywordModal({
  isOpen,
  onOpenClose,
  onSubmit,
}: RegisterKeywordModalProps) {
    
  return (
    <Modal size="xs" isOpen={isOpen} onOpenChange={onOpenClose}>
      <ModalContent >
        {(onClose) => (
          <>
            <ModalHeader className="">키워드 등록</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                placeholder="키워드를 입력하세요"
                variant="bordered"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onClick={onClose}>
                취소
              </Button>
              <Button color="primary" onPress={onClose}>
                등록
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default RegisterKeywordModal;

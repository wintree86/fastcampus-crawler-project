"use client";
import { registerKeyword } from "@/app/api/keyword/registerKeyword";
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
import { useState } from "react";

interface RegisterKeywordModalProps {
  isOpen: boolean;
  onOpenClose: () => void;
}
function RegisterKeywordModal({
  isOpen,
  onOpenClose,
}: RegisterKeywordModalProps) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = async () => {
    if(keyword !== '') {
        await registerKeyword({keyword});
        alert('등록되었습니다.')
        onOpenClose();
    } else {
        alert('키워드를 입력하세요')
    }
    
  }

  return (
    <Modal size="xs" isOpen={isOpen} onOpenChange={onOpenClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="">키워드 등록</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                placeholder="키워드를 입력하세요"
                variant="bordered"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onClick={onClose}>
                취소
              </Button>
              <Button color="primary" onPress={handleSubmit}>
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

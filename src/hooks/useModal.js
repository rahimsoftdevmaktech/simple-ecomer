import { useEffect, useState } from "react"

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(()=>{

    },[isOpen])
    const closeModal = () => setIsOpen(false)
    const openModal = () => setIsOpen(true)


    return [isOpen, closeModal, openModal]
}
import { useEffect, useState } from 'react'

const useIsTouchdevice = (): boolean => {
  const [isTouchdevice, setIsTouchdevice] = useState<boolean>()
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchdevice(window.matchMedia('(hover: none)').matches)
    }
    if (screenWidth < 768) {
      setIsTouchdevice(window.matchMedia('(hover: none)').matches)
    }
  }, [screenWidth])

  return isTouchdevice
}

export default useIsTouchdevice

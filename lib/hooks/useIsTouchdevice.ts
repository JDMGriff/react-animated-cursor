import { useEffect, useState } from 'react'

const useIsTouchdevice = (): boolean => {
  const [isTouchdevice, setIsTouchdevice] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if the device supports touch events or doesn't support hover
      const isTouch =
        'ontouchstart' in window || window.matchMedia('(hover: none)').matches
      setIsTouchdevice(isTouch)
    }
  }, [])

  return isTouchdevice
}

export default useIsTouchdevice

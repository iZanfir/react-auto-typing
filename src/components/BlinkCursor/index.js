import React, { useEffect, useState, useCallback } from 'react'

const BlinkCursor = ({
  blinkSpeed = 500,
  active = true,
  style = { visibility: 'visible' }
}) => {
  const [blinking, setBlinking] = useState({
    style: { style }
  })

  const makeBlink = useCallback(() => {
    if (active) {
      const { visibility } = blinking.style || blinking
      const toggleBlink = visibility === 'visible' ? 'hidden' : 'visible'
      const blink = { visibility: toggleBlink }

      setTimeout(() => {
        setBlinking({ style: { style, ...blink } })
      }, blinkSpeed)
    }
  }, [blinking, blinkSpeed, active, style])

  useEffect(() => {
    makeBlink()
  }, [makeBlink, active])

  return <span {...blinking}>|</span>
}

export default BlinkCursor

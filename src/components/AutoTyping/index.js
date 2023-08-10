import React, { useCallback, useEffect, useState } from 'react'

const AutoTyping = ({
  textRef = 'Input a string',
  active = true,
  writeSpeed = 50,
  deleteSpeed = 50,
  delayToWrite = 1000,
  delayToDelete = 1500,
  justWrite = false,
  activeOnce = false,
  ...props
}) => {
  const [autoTyper, setAutoTyper] = useState('')
  const [whichFuncStart, setWhichFuncStart] = useState(true)

  const letterWriter = useCallback(() => {
    const text = textRef.slice(0, autoTyper.length + 1)
    setAutoTyper(text)
  }, [autoTyper, textRef])

  const letterRemover = useCallback(() => {
    const text = autoTyper.slice(0, -1)

    setAutoTyper(text)
  }, [autoTyper])

  const writer = useCallback(() => {
    setTimeout(() => {
      if (autoTyper.length === textRef.length) {
        setTimeout(() => {
          setWhichFuncStart(justWrite == true ? true : false)
        }, delayToDelete)
        return
      }

      letterWriter()
    }, writeSpeed)
  }, [autoTyper, textRef, writeSpeed, delayToDelete, letterWriter])

  const remover = useCallback(() => {
    setTimeout(() => {
      if (autoTyper.length === 0 && activeOnce == false) {
        setTimeout(() => {
          setWhichFuncStart(true)
        }, delayToWrite)
        return
      }
      letterRemover()
    }, deleteSpeed)
  }, [autoTyper, delayToWrite, deleteSpeed, letterRemover])

  useEffect(() => {
    if (active) {
      if (whichFuncStart === true) {
        writer()
      }
      if (whichFuncStart === false) {
        remover()
      }
    }
  }, [active, whichFuncStart, writer, remover])

  return <span {...props}>{autoTyper}</span>
}

export default AutoTyping

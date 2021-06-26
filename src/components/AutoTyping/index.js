import React, { useCallback, useEffect, useState } from 'react'
import PropType from 'prop-types'

const AutoTyping = ({
  textRef,
  active,
  writeInterval,
  deleteInterval,
  delayToWrite,
  delayToDelete,
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
          setWhichFuncStart(true)
        }, delayToDelete)
        return
      }

      letterWriter()
    }, writeInterval)
  }, [autoTyper, textRef, writeInterval, delayToDelete, letterWriter])

  const remover = useCallback(() => {
    setTimeout(() => {
      if (autoTyper.length === 0) {
        setTimeout(() => {
          setWhichFuncStart(false)
        }, delayToWrite)
        return
      }

      letterRemover()
    }, deleteInterval)
  }, [autoTyper, delayToWrite, deleteInterval, letterRemover])

  useEffect(() => {
    if (active) {
      if (whichFuncStart === false) {
        writer()
      }
      if (whichFuncStart === true) {
        remover()
      }
    }
  }, [active, whichFuncStart, writer, remover])

  return <span {...props}>{autoTyper}</span>
}

AutoTyping.propTypes = {
  textRef: PropType.string,
  active: PropType.bool,
  writeInterval: PropType.number,
  deleteInterval: PropType.number,
  delayToWrite: PropType.number,
  delayToDelete: PropType.number
}

AutoTyping.defaultProps = {
  textRef: 'Input a string',
  active: true,
  writeInterval: 50,
  deleteInterval: 50,
  delayToWrite: 1000,
  delayToDelete: 1500
}

export default AutoTyping

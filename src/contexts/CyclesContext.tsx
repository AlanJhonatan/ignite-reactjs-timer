import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'
import {
  addNewCycleAction,
  interruptActiveCycleAction,
  setCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { differenceInSeconds } from 'date-fns'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  amountSecondsPassed: number
  activeCycleId: string | null
  activeCycle: Cycle | undefined
  setActiveCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (formData: CreateCycleData) => void
  interruptActiveCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const stateJSON = localStorage.getItem('@ignite-timer:cyclesState-1.0.0')

      if (stateJSON) return JSON.parse(stateJSON)

      return initialState
    },
  )

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find(
    (cycle) => cycle.id === cyclesState.activeCycleId,
  )

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@ignite-timer:cyclesState-1.0.0', stateJSON)
  }, [cyclesState])

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function setActiveCycleAsFinished() {
    dispatch(setCycleAsFinishedAction())
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutes: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))

    setAmountSecondsPassed(0)
  }

  function interruptActiveCycle() {
    dispatch(interruptActiveCycleAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        setActiveCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptActiveCycle,
        cycles,
        activeCycleId,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}

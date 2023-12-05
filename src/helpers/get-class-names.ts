import { capitalize } from '@/helpers/capitalize'
import { clsx } from 'clsx'

type SlotsMap<T extends string> = Record<T, string>
type ModifiersMap<T extends string> = Record<T, any>
type Nullish = null | undefined

// prettier-ignore
export type ClassesObj<
  Slot extends string, Modifier extends string = never
> = [Modifier] extends [never]
  ? Partial<SlotsMap<Slot>>
  : Partial<SlotsMap<`${Slot}${Capitalize<Modifier>}`> & SlotsMap<Slot>>

const configure = <Slot extends string, Modifier extends string = never>(
  slotNames: Slot[],
  modifiers?: ModifiersMap<Modifier>
) => {
  return (...classes: (ClassesObj<Slot, Modifier> | Nullish)[]) => {
    const slotsMapArray = classes
      .map(classesObj => classesObj && getSlotsMap(slotNames, classesObj, modifiers))
      .filter(Boolean) as SlotsMap<Slot>[]

    return slotsMapArray.length === 1 ? slotsMapArray[0] : mergeSlotsMaps(slotNames, slotsMapArray)
  }
}

const mergeSlotsMaps = <Slot extends string>(
  slotNames: Slot[],
  slotsMapArray: SlotsMap<Slot>[]
): SlotsMap<Slot> =>
  slotNames.reduce((acc, slot) => {
    acc[slot] = slotsMapArray.map(slotsMap => slotsMap[slot]).join(' ')

    return acc
  }, {} as SlotsMap<Slot>)

const getSlotsMap = <Slot extends string, Modifier extends string>(
  slotNames: Slot[],
  classes: ClassesObj<Slot, Modifier>,
  modifiers?: ModifiersMap<Modifier>
): SlotsMap<Slot> => {
  return slotNames.reduce((acc, slot) => {
    acc[slot] = getClassNamesForSlot(slot, classes, modifiers)

    return acc
  }, {} as SlotsMap<Slot>)
}

const getClassNamesForSlot = (
  slot: string,
  classes: ClassesObj<string, string>,
  modifiers?: ModifiersMap<string>
) => {
  const classNamesWithModifiers = modifiers
    ? Object.entries(modifiers).map(
        ([modifier, value]) => !!value && classes[`${slot}${capitalize(modifier, true)}`]
      )
    : []

  return clsx(classes[slot], classNamesWithModifiers)
}

export default configure

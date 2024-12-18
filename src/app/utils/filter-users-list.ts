import { IFilterOptions, IUser } from "../interfaces"
import { isWithinInterval } from "date-fns";

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined
    if (NAME_NOT_TYPPED) return usersList

    const filteredList = usersList.filter(user => user.nome.toLowerCase().includes(name.toLowerCase()))
    return filteredList
}

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATE_NOT_SELECTED = startDate === undefined || endDate === undefined
    if (DATE_NOT_SELECTED) return usersList

    const checkDateInterval = (user: IUser) =>
        isWithinInterval(new Date(user.dataCadastro), { start: startDate, end: endDate })

    const filteredList = usersList.filter(checkDateInterval)
    return filteredList
}

const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined
    if (STATUS_NOT_SELECTED) return usersList

    const flteredList = usersList.filter(user => user.ativo === status)
    return flteredList
}

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = []
    filteredList = filterUsersListByName(filterOptions.name, usersList)
    filteredList = filterUsersListByStatus(filterOptions.status, filteredList)
    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList)
    return filteredList
}

export { filterUsersList }
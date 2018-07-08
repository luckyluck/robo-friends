import { IRobot } from './robot.interface';

export interface IAppProps {
    onRequestRobots: () => void,
    onSearchChange: () => void,
    robots: IRobot[],
    searchField: string,
    isPending: boolean
}
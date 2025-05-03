import { CircleUserRound } from 'lucide-react';

type UserIconProps = {
  className?: string;
}

const UserIcon = ({ className }: UserIconProps) => {
  return (
    <CircleUserRound className={className} />
  )
}
export default UserIcon

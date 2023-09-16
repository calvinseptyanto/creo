import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = () => {
  const { user } = useUser();
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={user?.profileImageUrl} />
      <AvatarFallback>
        <span>{user?.firstName?.charAt(0)}</span>
        <span>{user?.lastName?.charAt(0)}</span>
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;

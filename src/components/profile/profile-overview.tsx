import { MediaAddButton } from './media-add-button';
import { UserInfo } from './user-info';

export const ProfileOverView = () => {
  return (
    <section className="mx-auto flex h-fit w-4/5 flex-col items-end gap-1 shadow">
      <MediaAddButton />
      <UserInfo />
    </section>
  );
};

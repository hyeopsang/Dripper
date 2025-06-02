interface ProfileBioProps {
  bio: string;
}

export const ProfileBio = ({ bio }: ProfileBioProps) => {
  return (
    <div className="fixed">
      <p>{bio}</p>
    </div>
  );
};

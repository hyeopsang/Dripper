export interface BackgroundMedia {
  type: 'image' | 'video';
  url: string;
}

export interface UserProfile {
  id: string;
  user_id: string;
  display_name: string;
  bio: string;
  profile_images: string[];
  background_media: BackgroundMedia;
  updated_at: string;
  created_at: string;
}

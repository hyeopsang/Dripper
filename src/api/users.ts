import { supabase } from '../lib/supabaseClient';
import type { UserProfile } from '../types/user';

// 유저 정보 불러오기
export async function getUserProfile(userId: string) {
  const { data: user_profiles, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) throw error;
  return user_profiles as UserProfile;
}
// 유저 정보 삭제
export async function deleteUserProfile(userId: string) {
  const { error } = await supabase
    .from('user_profiles')
    .delete()
    .eq('user_id', userId);

  if (error) throw error;
}
// 유저 정보 수정
export async function updateUserProfile(
  userId: string,
  userProfile: UserProfile
) {
  const { data: user_profiles, error } = await supabase
    .from('user_profiles')
    .update(userProfile)
    .eq('user_id', userId)
    .select()
    .single();

  if (error) throw error;
  return user_profiles as UserProfile;
}

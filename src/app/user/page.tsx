import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import React from 'react'
import getCurrentUser from '../actions/getCurrentUser';

const UserPage = async () => {

  // const session = await getServerSession(authOptions);
  // console.log('session', session)
  const userData =await  getCurrentUser();
  console.log('userData', userData)

  return (
    <div>로그인된 유저</div>
  )
}

export default UserPage
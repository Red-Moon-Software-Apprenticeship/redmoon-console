import {prisma} from '../db';

export const deleteInvite = async (inviteId) =>
  prisma.invite.delete({
    where: {
      id: inviteId,
    },
  });
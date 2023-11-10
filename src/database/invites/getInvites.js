import { prisma } from "../db";

export const getInvitesByInviterId = async (inviterId) =>
  prisma.invite.findMany({
    where: {
      inviterId,
    },
    include: {
      inviter: true,
      issue: true,
      invitee: true,
    },
  });

export const getInvitesByInviteeId = async (inviteeId) =>
  prisma.invite.findMany({
    where: {
      inviteeId,
    },
    include: {
      inviter: true,
      issue: true,
      invitee: true,
    },
  });

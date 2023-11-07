import { prisma } from "../db";

export const createInvite = async (inviterId, issueId, inviteeId) =>
  prisma.invite.create({
    data: {
      inviterId,
      issueId,
      inviteeId,
    },
  });
